# Jarvis-Like AI Assistant Guide

A Next.js knowledge base that walks through designing and shipping a personalized, Jarvis-inspired AI assistant on your laptop. Deploy-friendly on Vercel.

## Scripts

- `npm run dev` – start local development server.
- `npm run build` – create production build.
- `npm run start` – run the production server locally.
- `npm run lint` – lint the codebase.

## Deployment

Ensure dependencies are installed, run the build, then deploy with the provided Vercel token:

```bash
npm install
npm run build
vercel deploy --prod --yes --token "$VERCEL_TOKEN" --name agentic-db0cfe09
```
