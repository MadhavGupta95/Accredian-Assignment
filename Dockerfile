# 1. Base stage - set up Node image

FROM node:20-alpine AS base

WORKDIR /app

# Update npm to a Node 20 compatible version.
# npm 12 requires Node 22+, so do not use npm@latest.
RUN npm install -g npm@11

# Make npm more tolerant of transient network failures.
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-factor 2 && \
    npm config set fetch-retry-mintimeout 1000 && \
    npm config set fetch-retry-maxtimeout 60000

# Verify npm and bundled tar versions
RUN npm --version && \
    node -p "require('/usr/local/lib/node_modules/npm/node_modules/tar/package.json').version"


# 2. Dependencies stage - install packages

FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci

# Show the versions we're actually using
RUN npm ls next tar --depth=0 || true

# Safety check for vulnerable Next.js versions
RUN node -e "\
const semver = require('semver'); \
const p = require('./node_modules/next/package.json'); \
const version = p.version; \
if (semver.gte(version, '15.0.0') && semver.lt(version, '15.5.24')) { \
  console.error('Vulnerable Next.js version:', version); \
  process.exit(1); \
} \
if (semver.gte(version, '16.0.0') && semver.lt(version, '16.3.3')) { \
  console.error('Vulnerable Next.js version:', version); \
  process.exit(1); \
} \
console.log('Next.js version is safe:', version);"


# 3. Development stage - targeted by docker-compose for hot reloading

FROM base AS dev

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=development

CMD ["npm", "run", "dev", "--", "--webpack"]


# 4. Builder stage - build the application for production

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Verify standalone output exists
RUN ls -la .next
RUN ls -la .next/standalone


# 5. Runner stage - production environment

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root system user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy production files
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

# Run as non-root user
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]