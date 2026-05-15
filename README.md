# Brice Leasure Portfolio

Single-page React + Tailwind portfolio designed for Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New Project** and import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Final setup steps

- Contact form: replace `https://formspree.io/f/your-form-id` in `src/App.jsx` with your real Formspree endpoint.
- Resume button: place your resume at `public/resume.pdf` (or swap button link to your Google Drive PDF URL).
