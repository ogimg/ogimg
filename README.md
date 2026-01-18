## ogimg

Create stunning Open Graph (OG) images for your website. Free, open-source, and built with Next.js.

- **Live site**: `https://ogimg.art`
- **Repository**: `https://github.com/megh-bari/ogimg`

### Status

- **Landing page**: implemented
- **Editor** (`/editor`): linked from the UI, but not implemented yet (route is currently missing)

### Features (planned / in progress)

- Real-time preview
- Multiple templates
- Custom fonts & colors
- Export as PNG
- Responsive design
- Dark mode support

### Tech stack

- **Next.js** (App Router) + **React**
- **Tailwind CSS v4**
- **shadcn/ui** (New York) + **Radix UI**
- **next-themes** (theme switching) + theme switch animation
- **Biome** (lint/format)

### Getting started

#### Prerequisites

- **Node.js**: recommended 20+
- **npm** (this repo includes `package-lock.json`)

#### Install

```bash
npm install
```

#### Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Scripts

```bash
# dev server
npm run dev

# production build + start
npm run build
npm run start

# lint/format (Biome)
npm run lint
npm run lint:fix
npm run format
```

### Project structure

- `app/`: Next.js routes, layout, and global styles
- `components/`: UI + page/landing components
- `constants/site.ts`: site URLs, social links, and feature list
- `app/metadata.ts`: SEO/OpenGraph/Twitter metadata
- `lib/`: shared utilities and font config

### Deployment

This project is a standard Next.js app and deploys cleanly on **Vercel**:

- Build command: `npm run build`
- Output: Next.js default

### Contributing

- Open an issue or PR on `https://github.com/megh-bari/ogimg`
- Please run `npm run lint` before submitting changes

### License

No license file is currently present in this repository (add a `LICENSE` file to make licensing explicit).
