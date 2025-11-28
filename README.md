# E-commerce Frontend (Vite + React + TypeScript)

This repository contains a modern e-commerce frontend built with Vite, React, TypeScript, Tailwind CSS, Radix UI and shadcn-inspired components. It provides public pages for browsing products, categories and a buyer checkout flow, as well as an admin area for managing products, categories, sliders, orders, users and chat/conversations.


## Table of contents

- Overview
- Features
- Tech stack
- Prerequisites
- Environment variables
- Getting started
- Available scripts
- Project structure
- Key implementation details
- Deployment
- Contributing
- Troubleshooting
- License


## Features

- Public product listing, product details and category filtering
- Featured products and sliders support
- Search and category-based filtering
- Shopping cart and checkout flow
- User authentication (login & signup)
- Orders listing for buyers and admin
- Admin dashboard with product/category/slider/user/order management
- Chat/conversation support for admins and guests
- File upload endpoints (for sliders/products) handled with FormData
- Uses localStorage for auth token persistence


## Tech stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- shadcn-style component patterns
- TanStack React Query
- React Router v6
- Sonner for notifications
- Recharts for charts in admin dashboard
- date-fns for date utilities




## Environment variables

Create a `.env` file at the project root (or set env vars in your host) with the following variable:

```
VITE_API_URL=https://api.example.com/api
```

- `VITE_API_URL` - Base URL of the backend API (defaults to `http://localhost:5000/api` if not provided).


## Getting started (development)

1. Install dependencies

   ```bash
   npm install
   ```

2. Create the `.env` file and set `VITE_API_URL` if needed.

3. Start the dev server

   ```bash
   npm run dev
   ```

4. Open the app in the browser at the address shown by Vite (typically `http://localhost:5173`).


## Build and preview

- Build for production:

  ```bash
  npm run build
  ```

- Preview the production build locally:

  ```bash
  npm run preview
  ```


## Linting

- Run ESLint:

  ```bash
  npm run lint
  ```


## Available scripts (from `package.json`)

- `dev` — Start Vite dev server
- `build` — Build production assets
- `build:dev` — Build assets in development mode
- `preview` — Preview production build locally
- `lint` — Run ESLint



## Key implementation details

- Routing: All routes are defined in `src/App.tsx`. Admin routes are under `/admin/*` and require appropriate authentication/role handling by the auth layer.

- API client: `src/lib/api.ts` encapsulates REST calls. It:
  - Reads `VITE_API_URL` from `import.meta.env` (falls back to `http://localhost:5000/api`).
  - Stores auth token in localStorage under `authToken` and attaches `Authorization: Bearer <token>` to requests when present.
  - Uses `fetch` and throws errors with messages from the API when responses are not ok.

- State & caching: The app uses TanStack React Query (`@tanstack/react-query`) for server-state caching, fetching, and mutations.

- Styling: Tailwind CSS is used across the app with utility classes. The UI components follow a shadcn/Radix pattern in `src/components/ui` for consistent reusable primitives.

- Forms: `react-hook-form` and `@hookform/resolvers` are available for form handling and validation.


## Deployment notes

- Set `VITE_API_URL` on your hosting environment to point to the backend API.
- Build the app with `npm run build` and deploy the generated `dist/` directory to your static host (Netlify, Vercel, S3 + CloudFront, or any static file server).
- If deploying to a subdirectory or behind a proxy, ensure the router base is handled correctly by your host or set `base` in Vite config.


## Contributing

- Follow existing code patterns in `src/components/ui` for new primitives.
- Add new pages under `src/pages` and register routes in `src/App.tsx`.
- Keep types updated in `src/types/index.ts` when API contracts change.
- Run `npm run lint` and ensure the code compiles before opening PRs.


## Troubleshooting

- If the app cannot reach the API, verify `VITE_API_URL` is correct and that the backend is running and accessible from the browser.
- If authentication fails, check whether tokens are stored in localStorage under the `authToken` key and that the backend expects `Authorization: Bearer <token>`.
- For CORS errors, ensure the backend allows requests from your frontend origin.


## Where to look for common changes

- Add/modify API calls: `src/lib/api.ts`
- Authentication flow: `src/contexts/AuthContext.tsx`
- Cart handling: `src/contexts/CartContext.tsx`
- Page routing: `src/App.tsx`
- Shared types: `src/types/index.ts`

