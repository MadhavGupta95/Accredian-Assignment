# Setup Instructions

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd <repository-name>
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open http://localhost:3000 in your browser.

---

# Approach Taken

- Built the application using **Next.js App Router** and **TypeScript**.
- Designed the UI using **Tailwind CSS** with a focus on responsive layouts for desktop and mobile devices.
- Structured the application into reusable components, with each landing page section implemented independently.
- Implemented smooth navigation between sections using anchor links.
- Added a mock API endpoint for the enquiry form to demonstrate API integration as required by the assignment.

---

# AI Usage Explanation

AI tools (primarily ChatGPT) were used during development for:

- Improving the responsiveness of components using Tailwind CSS.
- Debugging React, TypeScript, and Next.js issues.
- Getting guidance on component organization and reusable code structure.
- Resolving layout and styling issues more efficiently.

All components, project structure, integration, testing, and final refinements were implemented and verified manually.

---

# Improvements With More Time

If given more time, I would:

- Integrate the enquiry form with a production-ready database instead of a mock API.
- Send confirmation emails to users after successful form submission.
- Build complete **About** and **Blog** pages instead of placeholder navigation links.
- Implement `IntersectionObserver` so the navigation bar automatically highlights the active section while scrolling.
- Add proper client-side and server-side form validation with user-friendly error messages.
- Enhance SEO with metadata, Open Graph tags, and structured data.
- Add loading and success/error states for API requests.