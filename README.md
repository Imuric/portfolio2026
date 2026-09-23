# Prathamesh Patil — UI/UX Designer Portfolio

A modern, production-grade portfolio website built with the latest stable releases of **Next.js (App Router)**, **React 19**, **TypeScript**, and **Lucide Icons**, featuring a clean modular architecture and full **Static Site Generation (SSG)** for ultra-fast performance.

---

## 🌟 Overview

This project is a modern, high-performance portfolio application designed to showcase product design, leadership, experiments, and writings. It preserves 100% of the custom design system, fluid typography, subtle animations, and responsive layouts while providing:
- Component-driven UI architecture
- Standardized **Lucide Icons**
- External integrations for **Resume** (`resume.imuric.com`) and **Writings** (`blog.imuric.com`)
- Experiments showcase featuring **Relaysis.com**
- Extensible dynamic routing system for future case studies
- Zero-runtime static export (`output: 'export'`) optimized for **Cloudflare Workers Static Assets**, **Vercel**, and **GitHub Pages**.

---

## 🚀 Modern Tech Stack (Latest Stable)

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **[Next.js](https://nextjs.org/)** (App Router) | `^16.3.6` | Modern React framework with full SSG pre-rendering |
| **[React](https://react.dev/)** | `^19.3.0` | Latest concurrent component-driven UI library |
| **[React DOM](https://react.dev/)** | `^19.3.0` | React DOM renderer |
| **[TypeScript](https://www.typescriptlang.org/)** | `^5.8.0` | Strict type safety across data models and components |
| **[Lucide Icons](https://lucide.dev/)** (`lucide-react`) | `^1.47.0` | Clean, accessible vector UI icons |
| **[Next Font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** | Built-in | Zero-layout-shift Google Fonts (`Bricolage Grotesque` & `Inter`) |
| **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** | Latest | Edge hosting via Wrangler Static Assets |
| **[pnpm](https://pnpm.io/)** | `^11.x` | High-efficiency package manager |

---

## ✨ Current Pages & Features

- **🏠 Home Page (`/`)**:
  - Hero introduction with bio and social links.
  - Worked-with company logos marquee.
  - **Selected Work**: Currently displaying an **"Updating Soon" (In Development)** block while new case studies are prepared. (Full case study architecture and dynamic routes remain preserved in code for future activation).
  - Leadership & Impact highlights.
  - Animated 3-column vertical testimonial marquee.
  - Design skills marquee.
- **👤 About Page (`/about`)**:
  - Background story and core design expertise pills.
  - 3-step structured design methodology (Discover, Define, Deliver) with Lucide icons.
  - Interactive "Beyond Work" gallery slider with touch/button controls.
- **🧪 Experiments Page (`/experiments`)**:
  - Features **[Relaysis.com](https://relaysis.com)** — A design-to-code bridge with Token Forge for generating semantic tokens and synchronizing variables between Figma and code.
  - Visual sketches showcase.
- **✍️ Writings (External Redirect)**:
  - Direct navigation link to [blog.imuric.com](https://blog.imuric.com).
- **📄 Resume (External Redirect)**:
  - Header CTA button linking directly to [resume.imuric.com](https://resume.imuric.com).

---

## 🗂️ Project Structure

```text
portfolio2026/
├── app/
│   ├── about/
│   │   └── page.tsx            # About page (Bio, Process, Beyond Work)
│   ├── experiments/
│   │   └── page.tsx            # Playground experiments (Relaysis.com) & sketches
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Extensible dynamic case study route (SSG)
│   ├── globals.css             # Complete design system styles & animations
│   ├── layout.tsx              # Root layout (Fonts, Header, Footer, Metadata)
│   └── page.tsx                # Homepage (Hero, Logos, Work, Leadership, Testimonials)
├── components/
│   ├── BackToTopFloat.tsx      # Floating scroll-to-top trigger button
│   ├── BeyondSlider.tsx        # Interactive gallery slider for About page
│   ├── Footer.tsx              # Footer with contact info and socials
│   ├── Header.tsx              # Header nav with Resume and Writings redirects
│   ├── ProjectCard.tsx         # Reusable project card component
│   ├── SafeImage.tsx           # Robust image component with fallback support
│   ├── ScrollReveal.tsx        # IntersectionObserver scroll reveal handler
│   └── SocialIcons.tsx         # Lucide-styled brand icons (LinkedIn, X, Instagram)
├── data/
│   ├── experiments.ts          # Experiments data (Relaysis.com) & sketches
│   ├── leadership.ts           # Leadership & Impact cards data
│   ├── projects.ts             # Centralized project catalog (for future case studies)
│   ├── testimonials.ts         # Testimonials and client review data
│   └── types.ts                # TypeScript interfaces and type definitions
├── public/
│   ├── assets/                 # High-res portraits, company logos, resume PDF
│   ├── apple-touch-icon.png    # iOS touch icon
│   ├── favicon-16x16.png       # Small favicon
│   ├── favicon-32x32.png       # Standard favicon
│   └── favicon.ico             # Root favicon
├── next.config.mjs             # Next.js configuration (output: 'export')
├── package.json                # Project dependencies (Next 16, React 19)
├── tsconfig.json               # TypeScript configuration with @/* aliases
├── wrangler.jsonc              # Cloudflare Workers Static Assets configuration
└── README.md                   # Project documentation
```

---

## 🛠️ Run & Development Commands

### 1. Prerequisites
- **Node.js**: v20 or higher (Node 20, 22, or 24 LTS)
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
Compiles TypeScript, validates routes, and statically generates all pages into the `./out` directory:
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
3. Vercel automatically detects Next.js and deploys with optimal caching.

### GitHub Pages / Netlify / S3
Because `output: 'export'` is configured in `next.config.mjs`, you can upload the contents of the `./out` directory to any static hosting provider.

---

## 📄 License & Credits

- **Designed & Developed by**: [Prathamesh Patil](https://github.com/Imuric)
- **Icons**: [Lucide Icons](https://lucide.dev/)
