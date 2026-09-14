# From Signal → Scale

An interactive product-building artifact created for a Product Builder role at EverAI.

This is not a portfolio grid or an HTML résumé. The experience demonstrates an operating model: investigate a signal, frame the behaviour, make an assumption tangible, instrument it, expose it carefully, and decide from evidence.

## Stack

- Next.js App Router
- React + strict TypeScript
- Motion for state transitions
- Lightweight Canvas 2D for the responsive hero field
- Custom CSS design system

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run typecheck
npm run build
```

## Edit content

Most narrative data lives in:

- `content/product.ts` — operating loop, case files, opportunity lenses and event taxonomy
- `content/builder.ts` — AI-assisted build workspace

The more bespoke narrative sections are kept beside their rendering components so the relationship between interaction and copy remains explicit.

## Component structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  hero/
  product-loop/
  builder/
  experiment/
  scale/
  cases/
  judgment/
  everai/
  safety/
  plan/
  final/
content/
types/
```

## Performance notes

The hero uses Canvas 2D rather than a WebGL dependency. Device pixel ratio is capped, the animation is cancelled on unmount, and reduced-motion users receive a static rendered state. Core content and every decision remain available without the animation.

## Accessibility

- Semantic landmarks and heading hierarchy
- Native buttons, tabs, range inputs and disclosure controls
- Visible keyboard focus
- Minimum 44px interactive targets
- Live regions for changing decisions
- `prefers-reduced-motion` support
- Color is reinforced by text labels for pass, watch and fail states

## Deployment

The project can be deployed to any Next.js-compatible host. Set `NEXT_PUBLIC_SITE_URL` to the production origin so social preview images resolve correctly. No environment variables are required for the application itself.

## Fact and content disclaimer

The consumer-scale, consumer-finance and document-intelligence facts are based on supplied application evidence. Wording is deliberately scoped and does not claim sole ownership.

All EverAI product examples, metrics, event names and experiments are explicitly illustrative. They do not use or imply access to EverAI internal data, systems or non-public information. The safety model does not speculate about EverGuard's implementation.
