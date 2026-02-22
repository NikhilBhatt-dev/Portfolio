# Nikhil Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, and React Three Fiber.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Three.js + React Three Fiber + Drei
- GSAP
- EmailJS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Environment Variables

Create a `.env` file in the `portfolio` root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Build production assets into `dist/`
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the generated `dist/` folder to your hosting provider (Netlify, Vercel, etc.).

## Project Structure

```text
portfolio/
  public/
    assets/
    textures/
  src/
    components/
    section/
    constants/
  .env
  package.json
```
