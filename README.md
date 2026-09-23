# Benchmark Technology Website

A modern, premium e-commerce and business website for **Benchmark Technology** — a technology and office-supplies business based in Masvingo, Zimbabwe.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4** and **shadcn/ui**.

## Live Site

- Domain: `www.benchmarktechnology.co.zw`
- Deployed on [Vercel](https://vercel.com)

## Features

- **Premium brand-first design** built around the Benchmark Technology logo (navy + red).
- **Responsive** experience for desktop, laptop, tablet and mobile.
- **Product discovery** with categories, search, filters and sort.
- **Product pages** with image gallery, specifications, features and related products.
- **WhatsApp-first enquiry flow** integrated throughout the site.
- **Enquiry list / quote cart** — add products and send a combined WhatsApp quote request.
- **Corporate enquiries page** for schools, NGOs, businesses and organisations.
- **Branch locations** for Masvingo, Chivi and Zvishavane.
- **SEO-ready** with metadata, Open Graph, sitemap, robots.txt, structured data (LocalBusiness + Product).
- **Accessibility** optimised: keyboard navigation, focus states, semantic HTML, reduced-motion support.
- **Performance** optimised: lazy-loaded images, static generation, minimal JS, Core Web Vitals focused.

## Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
app/                  # Next.js App Router pages
components/           # Reusable React components
  home/               # Homepage sections
  layout/             # Navbar, footer, mobile nav
  shop/               # Product card, grid, filters
  enquiry/            # Quote/enquiry cart components
  contact/            # Contact form
  ui/                 # shadcn/ui components
lib/                  # Data, utilities, enquiry store
public/               # Static assets and product images
```

## Deployment

This project is ready to deploy on **Vercel**.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Set the environment variable if needed:
   - `NEXT_PUBLIC_SITE_URL=https://www.benchmarktechnology.co.zw`

## Contact

**Benchmark Technology**
- Address: Office No. 1B, Old Mutual Building, Masvingo, Zimbabwe
- Phone: 039 2266 757 / 078 394 3945 / 071 533 0838
- Email: benchmarktechnology@hotmail.com
- Website: www.benchmarktechnology.co.zw
