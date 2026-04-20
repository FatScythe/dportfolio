# Variable Portfolio

A minimalist, high-performance design portfolio built with **Next.js 16**, **TypeScript**, and **Sanity CMS**. This project features a fluid hero section with dynamic content management and a robust server-side caching strategy.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **CMS:** [Sanity v3](https://www.sanity.io/)
- **Styling:** Tailwind CSS 4 & Styled Components
- **Language:** TypeScript
- **Icons:** React Icons
- **Deployment:** Optimized for Vercel

---

## 🛠️ Key Features

- **Dynamic Hero Section:** Manage italicized text and highlighted keywords directly from Sanity.
- **Request Memoization:** Uses React `cache()` and Next.js Data Cache for lightning-fast, redundant-free API calls.
- **Sanity Integration:** Custom schema for site settings, about page content, and project galleries.
- **Responsive Typography:** Custom font integration using `Futura` and `Calluna` variables.
- **Build-Safe Fallbacks:** Robust error handling ensures the site builds successfully even if CMS data is missing.

---

## 📂 Directory Structure

```text
├── app/                # Next.js App Router (Pages, Layouts, API)
├── components/         # Reusable UI components
├── constants/          # Static fallback data (DEFAULT_PORTFOLIO_DATA)
├── context/            # PortfolioProvider and Global State
├── hook/               # Custom React hooks (usePortfolio, useSocialLinks)
├── sanity/             # Sanity Studio schemas, config, and client
├── types/              # TypeScript interfaces and types
├── public/             # Static assets (fonts, icons)
└── proxy.ts            # Middleware/Proxy configurations
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```bash
# Personal Information
NEXT_PUBLIC_PORTFOLIO_NAME="John Doe"
NEXT_PUBLIC_PORTFOLIO_CV_URL=""
NEXT_PUBLIC_PORTFOLIO_EMAIL="johndoe@email.com"
NEXT_PUBLIC_PORTFOLIO_LINKEDIN=""
NEXT_PUBLIC_PORTFOLIO_BEHANCE=""

# Security
PORTFOLIO_PASSWORD=your_secure_password

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🛠️ Getting Started

### 1\. Install Dependencies

This project uses `pnpm` for package management:

```bash
pnpm install
```

### 2\. Run Development Server

```bash
pnpm start:dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

### 3\. Sanity Studio

To manage content, you can access the Sanity Studio via the `/admin` route or run:

```bash
npx sanity start
```

### 4\. Production Build

To create an optimized production build:

```bash
pnpm run build
```

---

## 📝 Scripts

- `start:dev`: Launches the development server.
- `build`: Compiles the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.

---

## 📄 License

Private. All rights reserved.
