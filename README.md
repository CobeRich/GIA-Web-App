Groundwater Intelligence Academy (GIA) web platform built with Next.js.

This repository powers the institutional site for research, study, platform, innovation, knowledge resources, partnerships, and opportunities.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Primary app routes are under `src/app`. Content lives in `content/` and is consumed by `src/lib/content.ts`.

The UI uses Tailwind CSS with reusable components under `src/components`.

## Scripts

- `npm run dev` starts local development.
- `npm run lint` runs lint checks.
- `npm run build` builds production assets.
- `npm run start` serves the production build.
