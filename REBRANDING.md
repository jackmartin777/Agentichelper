# Rebranding Guide

This document provides step-by-step instructions for rebranding this application with your own company name, logo, colors, and messaging.

---

## Table of Contents

1. [App Name & Metadata](#1-app-name--metadata)
2. [Logos & Favicons](#2-logos--favicons)
3. [Color Theme](#3-color-theme)
4. [Social & SEO Metadata](#4-social--seo-metadata)
5. [Navigation & Footer Links](#5-navigation--footer-links)
6. [Landing Page Content](#6-landing-page-content)
7. [Web Manifest & PWA](#7-web-manifest--pwa)
8. [Internationalization (i18n)](#8-internationalization-i18n)
9. [Environment Variables](#9-environment-variables)
10. [Full Checklist](#10-full-checklist)

---

## 1. App Name & Metadata

Update the application name in the following files:

| File | What to Change |
|------|----------------|
| `next/src/components/AppHead.tsx` | Default page title (`"AgentGPT"`), description text, and OG title |
| `next/src/components/AppTitle.tsx` | The display name shown on the main dashboard (`"AgentGPT"`) |
| `next/public/site.webmanifest` | `"name"` and `"short_name"` fields |
| `README.md` | Project name and description throughout |

### Example — `AppHead.tsx`

```tsx
// Before
<title>{title ?? "AgentGPT"}</title>

// After
<title>{title ?? "YourBrand"}</title>
```

### Example — `AppTitle.tsx`

```tsx
// Before
<span ...>AgentGPT</span>

// After
<span ...>YourBrand</span>
```

---

## 2. Logos & Favicons

Replace the logo and icon files in `next/public/`:

| File | Purpose | Recommended Size |
|------|---------|-----------------|
| `favicon.svg` | Browser tab icon (SVG) | Scalable |
| `favicon.ico` | Legacy browser icon | 32×32 |
| `favicon-16x16.png` | Small icon | 16×16 |
| `favicon-32x32.png` | Standard icon | 32×32 |
| `apple-touch-icon.png` | iOS home screen | 180×180 |
| `android-chrome-192x192.png` | Android icon | 192×192 |
| `android-chrome-512x512.png` | Android splash | 512×512 |
| `banner.png` | Social share banner | 1280×640 |
| `social.png` | OG image | 1200×630 |
| `wordmark.svg` | Text-based logo | Scalable |

Logo variants in `next/public/logos/`:

| File | Purpose |
|------|---------|
| `dark-default-solid.svg` | Default logo used in NavBar and sidebars |
| Other variants | Used in specific contexts (light theme, partners, etc.) |

**Tip**: Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all icon sizes from a single source image.

---

## 3. Color Theme

The color palette is defined in `next/tailwind.config.cjs`. Modify the theme to match your brand.

### Primary Gradient Colors

The main brand gradient appears in several components. Search for these values and replace:

```
#02FCF1  →  Your primary accent color
#A02BFE  →  Your secondary accent color
#1152FA  →  Your blue accent
#882BFE  →  Your purple accent
#1E26FF  →  Your deep accent
#FF04FF  →  Your highlight color
```

### Tailwind Theme Colors

Edit the `theme.extend.colors` section in `next/tailwind.config.cjs`:

```js
// Example: Change the base color scale
colors: {
  shade: {
    // Replace with your brand color scale
    100: "#your-lightest",
    200: "#your-lighter",
    // ...
    800: "#your-darkest",
  }
}
```

### Key Files with Gradient/Color Hardcoded

| File | Colors Used |
|------|-------------|
| `next/src/components/index/landing.tsx` | Play button gradient |
| `next/src/components/BannerBadge.tsx` | Badge gradient border |
| `next/src/components/GlowWrapper.tsx` | Glow effect colors |
| `next/src/components/landing/Hero.tsx` | Hero section gradients |
| `next/src/pages/agent-creator.tsx` | Agent creator page gradients |

---

## 4. Social & SEO Metadata

Update all social/SEO metadata in `next/src/components/AppHead.tsx`:

```tsx
// Replace these values:
const description = "Your new app description here.";

// Twitter metadata
<meta name="twitter:site" content="@YourTwitterHandle" />
<meta name="twitter:title" content="YourBrand 🤖" />
<meta name="twitter:image" content="https://yourdomain.com/banner.png" />

// Open Graph metadata
<meta property="og:title" content="YourBrand: Your tagline here 🤖" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:image" content="https://yourdomain.com/banner.png" />
```

Also update the Google Site Verification tag or remove it:

```tsx
<meta name="google-site-verification" content="your-verification-code" />
```

---

## 5. Navigation & Footer Links

### NavBar (`next/src/components/NavBar.tsx`)

Update the `navigation` array and brand display:

```tsx
// Company name displayed next to the logo
<span className="text-xl font-light tracking-wider">YourBrand</span>

// Navigation links
const navigation = [
  { name: "Home", href: "/home", icon: <HomeIcon /> },
  { name: "Agent Creator", href: "/agent-creator", icon: <HomeIcon /> },
  { name: "Blog", href: "/blog", icon: <BlogsIcon /> },
  { name: "Pricing", href: "https://yourdomain.com/plan", icon: <PricingIcon /> },
  { name: "Github", href: "https://github.com/your-org/your-repo", icon: <GithubIcon /> },
  { name: "Docs", href: "https://yourdomain.com/docs", icon: <DocsIcon /> },
];
```

### Footer Links (`next/src/components/landing/FooterLinks.tsx`)

Update all footer URLs:

```tsx
<FooterLink href="https://yourdomain.com/careers">Careers</FooterLink>
<FooterLink href="https://status.yourdomain.com">Status</FooterLink>
<FooterLink href="https://yourdomain.com/privacy">Privacy</FooterLink>
<FooterLink href="https://yourdomain.com/terms">Terms</FooterLink>
```

### Home Page Footer (`next/src/pages/home.tsx`)

Update the copyright notice:

```tsx
// Before
&copy; 2023 Reworkd AI, Inc.

// After
&copy; 2025 YourCompany, Inc.
```

---

## 6. Landing Page Content

### Home Page Hero (`next/src/components/landing/Hero.tsx`)

Update the headline, description, and CTA links:

```tsx
// Headline
<span>Your Headline</span>

// Description
<p>Your product description...</p>

// CTA buttons — update URLs
window.open("https://yourdomain.com/signup", "_blank");
```

### Dashboard Title (`next/src/components/AppTitle.tsx`)

Update the banner badge text and link:

```tsx
<BannerBadge>Your promotional message here</BannerBadge>
```

### Agent Creator Page (`next/src/pages/agent-creator.tsx`)

Update the features, steps, and copy to match your product messaging.

---

## 7. Web Manifest & PWA

Update `next/public/site.webmanifest`:

```json
{
  "name": "YourBrand",
  "short_name": "YourBrand",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#your-theme-color",
  "background_color": "#your-bg-color",
  "display": "standalone"
}
```

---

## 8. Internationalization (i18n)

Translation files are located in `next/public/locales/{language}/`. Key files to update:

| File | Content |
|------|---------|
| `common.json` | Shared UI labels |
| `indexPage.json` | Main page text |
| `chat.json` | Chat interface text |
| `settings.json` | Settings page labels |
| `help.json` | Help dialog content |

Update translations in all supported languages, or remove unused languages from `next/next-i18next.config.js`.

---

## 9. Environment Variables

Review and update `.env` (or `.env.example`) for your deployment:

| Variable | Purpose |
|----------|---------|
| `NEXTAUTH_URL` | Your application URL |
| `NEXT_PUBLIC_BACKEND_URL` | Your API backend URL |
| `NEXT_PUBLIC_VERCEL_URL` | Your Vercel deployment URL |

---

## 10. Full Checklist

Use this checklist to track your rebranding progress:

- [ ] **App Name**: Update in `AppHead.tsx`, `AppTitle.tsx`, `site.webmanifest`, `README.md`
- [ ] **Logos**: Replace all files in `next/public/` and `next/public/logos/`
- [ ] **Favicons**: Replace `favicon.svg`, `favicon.ico`, and PNG icons
- [ ] **Banner/Social Images**: Replace `banner.png` and `social.png`
- [ ] **Colors**: Update gradient colors in components and `tailwind.config.cjs`
- [ ] **SEO Metadata**: Update `AppHead.tsx` with new titles, descriptions, and URLs
- [ ] **Twitter/OG Tags**: Update Twitter handle, OG URLs, and image paths
- [ ] **Navigation Links**: Update URLs in `NavBar.tsx` and `FooterLinks.tsx`
- [ ] **Landing Hero**: Update headline, description, and CTAs in `Hero.tsx`
- [ ] **Copyright**: Update copyright text in `home.tsx`
- [ ] **Web Manifest**: Update `site.webmanifest` with new name and colors
- [ ] **Translations**: Update locale files in `next/public/locales/`
- [ ] **Environment Variables**: Update `.env` with your domain and API URLs
- [ ] **Google Verification**: Update or remove the Google site verification meta tag
- [ ] **External Links**: Search for `reworkd.ai`, `agentgpt`, and `typeform` URLs and replace
- [ ] **README**: Update project description, badges, and links
