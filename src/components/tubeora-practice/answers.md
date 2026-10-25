# 15 Core Architecture & Performance Concepts — Interview Answers

This guide provides concise, interview-ready answers (60–90 seconds per concept) with minimal, practical code examples where needed.

---

## 01. The Critical Rendering Path (CRP)

### Interview Answer
> "The Critical Rendering Path is the sequence of steps browsers take to convert HTML, CSS, and JavaScript into pixels on screen:
> 1. **DOM Construction**: HTML is parsed into DOM nodes.
> 2. **CSSOM Construction**: CSS is parsed into computed style rules. CSS is **render-blocking** because rules cascade.
> 3. **Render Tree**: Intersects visible DOM elements with CSSOM rules (elements with `display: none` are excluded; `visibility: hidden` is included).
> 4. **Layout (Reflow)**: Calculates geometric box sizes and viewport coordinates.
> 5. **Paint (Rasterize)**: Converts geometries into pixel bitmaps across layers.
> 6. **Compositing**: GPU stacks and blends layers onto the screen.
>
> Synchronous JavaScript is **parser-blocking**. I optimize CRP by inlining critical CSS, using `defer` on scripts, preloading hero assets, and using GPU-only CSS properties (`transform`, `opacity`) to avoid reflows."

### Minimal Example: Avoiding Layout Thrashing
```js
// ❌ Bad: Read/Write interleaved in loop forces multiple reflows
elements.forEach(el => {
  const h = el.offsetHeight; // READ (forces layout)
  el.style.height = h + 10 + 'px'; // WRITE
});

// ✅ Good: Batch reads first, then batch writes (1 single layout pass)
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => { el.style.height = heights[i] + 10 + 'px'; });
```

---

## 02. The Core Web Vitals (CWV)

### Interview Answer
> "Core Web Vitals are Google's three standardized metrics for real-world user experience:
> 1. **LCP (Largest Contentful Paint $\le 2.5\text{s}$)**: Measures loading speed of the main viewport content (hero image or headline). Optimized via edge caching (low TTFB), preloading images (`fetchpriority='high'`), and using modern formats (WebP/AVIF).
> 2. **INP (Interaction to Next Paint $\le 200\text{ms}$)**: Measures overall UI responsiveness to user clicks/keypresses. Optimized by breaking long JavaScript tasks ($>50\text{ms}$) with `scheduler.yield()`, `requestAnimationFrame`, and React transitions (`useTransition`).
> 3. **CLS (Cumulative Layout Shift $\le 0.1$)**: Measures visual stability. Optimized by setting explicit `width`/`height` or `aspect-ratio` on images/iframes, reserving skeleton space for dynamic widgets, and matching font fallback metrics."

### Minimal Example: High-Priority Hero Image
```html
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />
<img src="/hero.webp" width="1200" height="600" style="aspect-ratio: 2/1;" alt="Hero" />
```

---

## 03. HTTP Caching

### Interview Answer
> "Production HTTP caching separates hashed immutable static assets from mutable HTML entry points:
> 1. **Hashed Assets (`bundle.a9f1b2.js`, `style.css`)**: Cached aggressively for 1 year with `Cache-Control: public, max-age=31536000, immutable`.
> 2. **Entry Point (`index.html`)**: Never cached long-term. Configured with `Cache-Control: no-cache` so browsers revalidate with the origin using `ETag` (`If-None-Match`). If unchanged, the server responds with a lightweight `304 Not Modified`.
> 3. **Dynamic API Data**: Leverages `stale-while-revalidate` to serve cached data instantly while refreshing asynchronously in the background."

### Minimal Example: Nginx / Header Rules
```http
# Static Hashed Assets
Cache-Control: public, max-age=31536000, immutable

# HTML Entry Point
Cache-Control: no-cache

# Read-Heavy APIs
Cache-Control: public, s-maxage=60, stale-while-revalidate=300
```

---

## 04. Content Negotiation

### Interview Answer
> "Content negotiation allows browsers to declare supported formats via request headers, letting the server or CDN respond with the best representation:
> - **Compression**: `Accept-Encoding: zstd, br, gzip` $\rightarrow$ server responds with Brotli (`Content-Encoding: br`).
> - **Media Formats**: `Accept: image/avif, image/webp` $\rightarrow$ server delivers modern lightweight AVIF/WebP.
> - **Language**: `Accept-Language: fr-FR, en` $\rightarrow$ serves localized content.
> 
> **Key Rule**: The server must send the `Vary` header (e.g. `Vary: Accept-Encoding, Accept`) so CDNs cache separate variants and do not serve Brotli or AVIF to unsupported clients."

### Minimal Example: Picture Fallback (Client-Side Content Negotiation)
```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" width="800" height="400" />
</picture>
```

---

## 05. Lazy Loading

### Interview Answer
> "Lazy loading defers downloading non-critical code and media until they enter the viewport or are triggered by user interaction:
> 1. **React Components**: Code-splitting route chunks or heavy modals using `React.lazy()` and `<Suspense>`.
> 2. **Media**: Native `loading='lazy'` on `<img>` and `<iframe>`.
> 3. **Viewport Triggering**: Using `IntersectionObserver` to trigger data fetching or render widgets when a user scrolls near them.
> 4. **Interaction Prefetching**: Triggering dynamic `import()` on button hover before the user clicks."

### Minimal Example: Component Lazy Loading
```tsx
import React, { Suspense, useState } from 'react';
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>View Analytics</button>
      {open && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
```

---

## 06. Bundle Splitting & Tree Shaking

### Interview Answer
> "Bundle splitting breaks a monolithic bundle into smaller, parallel chunks (route-based chunks and vendor chunks) to improve caching and reduce initial load times.
>
> Tree shaking is static dead-code elimination that removes unused exports from the final bundle.
> - **Prerequisite**: Requires static ES Module syntax (`import`/`export`), because CommonJS (`require()`) cannot be analyzed statically.
> - **Configuration**: Setting `"sideEffects": false` in `package.json` tells bundlers that unused files have no global mutations and can be pruned safely.
> - **Best Practice**: Avoid re-export barrel files that bundle unnecessary sibling dependencies."

### Minimal Example: `package.json`
```json
{
  "name": "my-ui-library",
  "sideEffects": [
    "*.css",
    "./src/polyfills.js"
  ]
}
```

---

## 07. Critical CSS

### Interview Answer
> "Because external CSS is render-blocking, the browser cannot paint any pixels until all stylesheets finish downloading.
>
> Critical CSS extracts the minimum styles required for the above-the-fold viewport and inlines them directly into `<style>` tags inside the HTML `<head>`. Remaining non-critical stylesheets are loaded asynchronously using `<link rel='preload' as='style'>`. This achieves immediate First Contentful Paint (FCP)."

### Minimal Example: Inlining Critical Styles
```html
<head>
  <!-- 1. Inlined critical styles (instant initial render) -->
  <style>
    body { margin: 0; font-family: system-ui; }
    .header { height: 60px; background: #111; color: #fff; }
  </style>
  <!-- 2. Asynchronously load full stylesheet -->
  <link rel="preload" href="/styles.css" as="style" onload="this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/styles.css" /></noscript>
</head>
```

---

## 08. Essential State vs. Derived State

### Interview Answer
> "The golden rule of React state architecture is: **Store only the minimal raw source of truth in state, and compute everything else on the fly during render.**
>
> - **Essential State**: Minimal raw values (e.g., `items: Item[]`, `searchQuery: string`, `selectedIds: Set<string>`).
> - **Derived State**: Computed values (e.g., `filteredItems`, `selectedCount`, `isAllSelected`).
>
> **Anti-pattern**: Storing derived values in `useState` and syncing them via `useEffect`. This causes extra re-renders, race conditions, and out-of-sync bugs. For expensive calculations, wrap them in `useMemo`."

### Minimal Example: Deriving in Render Body
```tsx
// ❌ Bad: Redundant state + useEffect synchronization
const [items, setItems] = useState<Item[]>([]);
const [filtered, setFiltered] = useState<Item[]>([]);
useEffect(() => {
  setFiltered(items.filter(i => i.status === 'active'));
}, [items]);

// ✅ Good: Pure derived calculation during render
const [items, setItems] = useState<Item[]>([]);
const [statusFilter, setStatusFilter] = useState('active');

const filteredItems = useMemo(
  () => items.filter(item => item.status === statusFilter),
  [items, statusFilter]
);
```

---

## 09. The Reducer Pattern

### Interview Answer
> "The Reducer Pattern models state mutations as deterministic transitions using a pure function: `(state, action) => newState`.
>
> - **Why use it?** When a component has complex state with multiple interdependent fields (e.g., filters, selections, pagination), `useReducer` centralizes state updates and prevents impossible intermediate states (e.g., `isLoading: true` AND `error: "failed"`).
> - **Testability**: Reducers are pure functions without React or DOM dependencies, allowing 100% unit test coverage with plain input/output assertions."

### Minimal Example: `useReducer`
```tsx
type State = { status: 'idle' | 'loading' | 'success' | 'error'; data?: Item[]; error?: string };
type Action = { type: 'FETCH_START' } | { type: 'FETCH_SUCCESS'; payload: Item[] } | { type: 'FETCH_ERROR'; error: string };

function tableReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'loading' };
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload };
    case 'FETCH_ERROR':
      return { status: 'error', error: action.error };
  }
}
```

---

## 10. Windowing (List Virtualization)

### Interview Answer
> "Windowing renders only the DOM nodes currently visible within the active scroll container (+ a small overscan buffer), rather than rendering thousands of rows.
>
> - **Why it matters**: Browsers struggle when rendering $>1,500$ DOM elements, leading to high memory usage and dropped frames during scrolling.
> - **Libraries**: `TanStack Virtual` (`useVirtualizer`), `react-window`.
> - **Key Considerations**: Measuring dynamic row heights dynamically with `ResizeObserver`, and preserving accessibility by providing `aria-rowcount` and `aria-rowindex`."

### Minimal Example: TanStack Virtual Concept
```tsx
import { useVirtualizer } from '@tanstack/react-virtual';

const rowVirtualizer = useVirtualizer({
  count: 50000,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 40,
  overscan: 5,
});

// Render virtual items using absolute positioning transform: translateY(...)
```

---

## 11. Server-Side Rendering (SSR)

### Interview Answer
> "Server-Side Rendering executes React components on the server for each request, generating an initial HTML document that is streamed to the browser using `renderToPipeableStream`.
>
> - **Advantages**: Immediate First Contentful Paint (FCP), fast social previews, and guaranteed SEO indexing for all crawlers.
> - **Trade-offs**: Higher Time to First Byte (TTFB) due to server processing, added server infrastructure costs, and the 'uncanny valley' where the UI is painted but not interactive until client-side hydration finishes."

---

## 12. Rehydration (Client-Side Hydration)

### Interview Answer
> "Rehydration is the process where client-side React boots up in the browser, walks the pre-rendered server HTML DOM, reconstructs the internal Fiber tree, and attaches event listeners.
>
> - **Hydration Mismatch**: Occurs when server-rendered HTML differs from the initial client render (e.g., using `typeof window !== 'undefined'`, `localStorage`, or random timestamps during render).
> - **React 18 Selective Hydration**: Wrapping components in `<Suspense>` allows React to stream HTML and hydrate parts of the page independently as chunks arrive, without waiting for the full page to download."

### Minimal Example: Safe Client-Only Render
```tsx
function ClientOnlyClock() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <span>--:--</span>; // Matches server HTML
  return <span>{new Date().toLocaleTimeString()}</span>; // Runs only on client
}
```

---

## 13. Partial Pre-rendering (PPR)

### Interview Answer
> "Partial Pre-rendering is a hybrid model (standardized in Next.js 14+) that combines static edge caching and dynamic server streaming in a **single HTTP connection**:
> 1. The static page shell (navigation, layout, skeleton placeholders) is pre-rendered at build time and served instantly from edge CDNs ($<50\text{ms}$ TTFB).
> 2. The dynamic components wrapped in `<Suspense>` holes are executed concurrently on the server and streamed into the page over the same open connection."

---

## 14. React Server Components (RSC)

### Interview Answer
> "React Server Components run exclusively on the server and **never add JavaScript to the client bundle**.
>
> - **RSC vs. SSR**: SSR outputs an HTML string for initial paint but still ships the full component JS bundle to the browser for hydration. RSC executes only on the server and streams a serialized JSON virtual DOM format without sending any component code to the client.
> - **`'use client'` Directive**: Defines the boundary where the component subtree transitions from Server Component to Client Component (required for state, effects, and DOM event listeners)."

### Minimal Comparison Table
| Feature | React Server Components (RSC) | Server-Side Rendering (SSR) |
|---|---|---|
| **Bundle Size** | 0 KB added to client bundle | Ships full JS bundle to client |
| **Output** | Serialized JSON UI tree (RSC wire format) | Initial HTML string |
| **Data Access** | Direct access to DB/secrets | Requires public/internal fetch API |
| **Interactivity** | No state (`useState`) or DOM events | Interactive after hydration |

---

## 15. Micro Frontends

### Interview Answer
> "Micro Frontends decompose a large frontend codebase into independently developed, tested, and deployed applications owned by autonomous teams, composed at runtime into a unified host shell.
>
> - **Integration Options**: **Module Federation** (Webpack 5/Vite) for seamless SPA runtime loading with shared dependencies; **Web Components** for framework-agnostic isolation; **iFrames** for hard security isolation.
> - **Production Challenges**: Dependency duplication (mitigated by configuring singleton shared libraries like React), CSS namespace collisions, and coordinating routing history across sub-apps."

### Minimal Example: Webpack Module Federation
```js
// Host / Shell webpack.config.js
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    authApp: 'authApp@https://auth.internal.domain/remoteEntry.js',
  },
  shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
});
```
