# Prathamesh Patil — UI/UX Designer Portfolio

A modern, production-grade portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Lucide Icons**, featuring dynamic slug-based case study routing and full **Static Site Generation (SSG)** for ultra-fast performance.

---

## 🌟 Overview

This project is a complete architectural modernization of a clean HTML/CSS/JS portfolio into a scalable **Next.js App Router** application. It preserves 100% of the custom design system, subtle animations, and responsive layouts while replacing legacy inline scripts and static HTML pages with:
- Dynamic slug-based routing (`/projects/[slug]`)
- Centralized TypeScript data models
- Componentized UI architecture
- Standardized **Lucide Icons**
- Zero-runtime static export (`output: 'export'`) optimized for **Cloudflare Workers Static Assets**, **Vercel**, and **GitHub Pages**.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** (App Router) | React Framework with SSG pre-rendering |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety for data models, props, and components |
| **[React](https://react.dev/)** | Component-driven UI development |
| **[Lucide Icons](https://lucide.dev/)** (`lucide-react`) | Clean, accessible vector UI icons |
| **[Next Font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** | Zero-layout-shift Google Fonts (`Bricolage Grotesque` & `Inter`) |
| **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** | Edge hosting via Wrangler Static Assets |
| **[pnpm](https://pnpm.io/)** | Fast, disk-space-efficient package manager |

---

## ✨ Key Features

- **⚡ Static Site Generation (SSG)**: Pre-renders all 15 routes (`/`, `/about`, `/experiments`, and case study slugs) at build time into pure static HTML/CSS/JS (`out/` folder).
- **🧭 Dynamic Case Studies (`/projects/[slug]`)**:
  - Centralized project catalog in `data/projects.ts`.
  - Statically generated via `generateStaticParams()`.
  - Dynamic SEO metadata (titles and descriptions) generated per project via `generateMetadata()`.
  - Supports URL aliases (e.g. `/projects/famli-app` redirects/maps to `/projects/famli`).
- **🎨 Design System & Styling**:
  - 100% preserved visual identity ported to `app/globals.css`.
  - Bootstrap-style 1140px fluid container and 12-column grid.
  - Light & Dark mode CSS variable support.
  - Infinite logo marquee and skills marquee animations.
  - Scroll-triggered entrance animations via `ScrollReveal` (`IntersectionObserver`).
- **📱 Responsive & Interactive Components**:
  - Sticky navigation header with mobile drawer toggle (`Header.tsx`).
  - Interactive "Beyond Work" gallery slider with touch/button controls and dot indicators (`BeyondSlider.tsx`).
  - Floating back-to-top button with smooth scrolling (`BackToTopFloat.tsx`).
  - Graceful image fallback loader (`SafeImage.tsx`).
- **🛡️ Standardized Icons**:
  - Replaced inline text placeholders and inconsistent SVGs with **Lucide Icons** across header, footer, process steps, and buttons.
  - Custom Lucide-compatible vector icons for LinkedIn, Twitter / X, and Instagram.

---

## 🗂️ Project Structure

```text
portfolio2026/
├── app/
│   ├── about/
│   │   └── page.tsx            # About page (Bio, Logos, Process, Beyond Work)
│   ├── experiments/
│   │   └── page.tsx            # Playground experiments & visual sketches
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic Project Case Study page (SSG)
│   ├── globals.css             # Complete design system styles & animations
│   ├── layout.tsx              # Root layout (Fonts, Header, Footer, Metadata)
│   └── page.tsx                # Homepage (Hero, Logos, Work, Leadership, Testimonials)
├── components/
│   ├── BackToTopFloat.tsx      # Floating scroll-to-top trigger button
│   ├── BeyondSlider.tsx        # Interactive gallery slider for About page
│   ├── Footer.tsx              # Footer with status chip, contact info, and socials
│   ├── Header.tsx              # Header nav with mobile drawer and resume link
│   ├── ProjectCard.tsx         # Reusable project card linking to /projects/[slug]
│   ├── SafeImage.tsx           # Robust image component with fallback support
│   ├── ScrollReveal.tsx        # IntersectionObserver scroll reveal handler
│   └── SocialIcons.tsx         # Lucide-styled brand icons (LinkedIn, X, Instagram)
├── data/
│   ├── experiments.ts          # Playground experiments & visual sketches data
│   ├── leadership.ts           # Leadership & Impact cards data
│   ├── projects.ts             # Comprehensive project case study data & slug helpers
│   ├── testimonials.ts         # Testimonials and client review data
│   └── types.ts                # TypeScript interfaces and type definitions
├── public/
│   ├── assets/                 # High-res portraits, company logos, resume PDF
│   ├── apple-touch-icon.png    # iOS touch icon
│   ├── favicon-16x16.png       # Small favicon
│   ├── favicon-32x32.png       # Standard favicon
│   └── favicon.ico             # Root favicon
├── next.config.mjs             # Next.js configuration (output: 'export')
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration with @/* aliases
├── wrangler.jsonc              # Cloudflare Workers Static Assets configuration
└── README.md                   # Project documentation
```

---

## 🔗 Project Slugs & Routes

Every project is rendered dynamically from `data/projects.ts` using Next.js App Router dynamic parameters:

| Project | Primary Slug / URL | Aliases Supported |
| :--- | :--- | :--- |
| **Famli App** | `/projects/famli` | `/projects/famli-app` |
| **OTC Marketplace Seller Portal** | `/projects/otc-seller-portal` | `/projects/otc` |
| **Phlebotomist App** | `/projects/phlebotomist-app` | `/projects/phlebo` |
| **Thyrocare Diagnostics Portal** | `/projects/tc-diagnostics` | `/projects/thyro`, `/projects/thyrocare-diagnostics` |

---

## 🛠️ Run & Development Commands

### 1. Prerequisites
- **Node.js**: v18.17 or higher (Node 20+ recommended)
- **Package Manager**: `pnpm` (or `npm` / `yarn`)

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Start Development Server
Starts the local development server with Hot Module Replacement (HMR) at [http://localhost:3000](http://localhost:3000):
```bash
pnpm dev
```

### 4. Build for Production (Static Export)
Compiles TypeScript, validates routes, and statically generates all 15 pages into the `./out` directory:
```bash
pnpm build
```

### 5. Preview Production Build Locally
You can preview the generated `./out` static build using any static file server:
```bash
npx serve out
```

### 6. Lint Code
Runs ESLint to check for code quality and syntax issues:
```bash
pnpm lint
```

---

## ☁️ Deployment

### Cloudflare Workers / Pages
This project is configured with `wrangler.jsonc` to deploy directly to **Cloudflare Workers Static Assets**:
```bash
npx wrangler deploy
```
- **Build Command**: `pnpm run build`
- **Output Directory**: `out`

### Vercel
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and deploys without additional configuration.

### GitHub Pages / Netlify / S3
Because `output: 'export'` is configured in `next.config.mjs`, you can upload the contents of the `./out` directory to any static hosting provider.

---

## 📄 License & Credits

- **Designed & Developed by**: [Prathamesh Patil](https://github.com/Imuric)
- **Icons**: [Lucide Icons](https://lucide.dev/)

