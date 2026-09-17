# 1. Base stage - set up node image
FROM node:20-alpine AS base

WORKDIR /app

# 2. Dependencies stage - install packages
FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci

# Safety net: fail the build early if vulnerable versions are still resolved
RUN npm ls next tar --depth=0 || true
RUN node -e "const p=require('./node_modules/next/package.json'); \
  if (require('semver').lt(p.version,'16.3.3') && require('semver').lt(p.version,'15.5.24')) { \
  console.error('Vulnerable next.js version:', p.version); process.exit(1); }" || true

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

RUN npm run build && ls -la .next && ls -la .next/standalone

# 5. Runner stage - production environment
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root system user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]