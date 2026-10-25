# 15 Essential Frontend Architecture & Performance Concepts
### Complete Interview Reference & 2-Minute Answer Guide

---

## Table of Contents
1. [01. The Critical Rendering Path (CRP)](#01-the-critical-rendering-path-crp)
2. [02. The Core Web Vitals (CWV)](#02-the-core-web-vitals-cwv)
3. [03. HTTP Caching](#03-http-caching)
4. [04. Content Negotiation](#04-content-negotiation)
5. [05. Lazy Loading](#05-lazy-loading)
6. [06. Bundle Splitting & Tree Shaking](#06-bundle-splitting--tree-shaking)
7. [07. Critical CSS](#07-critical-css)
8. [08. Essential State vs. Derived State](#08-essential-state-vs-derived-state)
9. [09. The Reducer Pattern](#09-the-reducer-pattern)
10. [10. Windowing (List Virtualization)](#10-windowing-list-virtualization)
11. [11. Server-Side Rendering (SSR)](#11-server-side-rendering-ssr)
12. [12. Rehydration (Client-Side Hydration)](#12-rehydration-client-side-hydration)
13. [13. Partial Pre-rendering (PPR)](#13-partial-pre-rendering-ppr)
14. [14. React Server Components (RSC)](#14-react-server-components-rsc)
15. [15. Micro Frontends](#15-micro-frontends)

---

## 01. The Critical Rendering Path (CRP)

### 1. Mental Model
The sequential pipeline the browser executes from receiving raw HTML bytes to painting pixels on the screen:
```
HTML Bytes ──► DOM Tree ────┐
                            ├─► Render Tree ──► Layout (Reflow) ──► Paint (Raster) ──► Composite
CSS Bytes  ──► CSSOM Tree ──┘
```

### 2. Under the Hood
1. **DOM Construction**: Bytes $\rightarrow$ Characters $\rightarrow$ Tokens $\rightarrow$ Nodes $\rightarrow$ DOM Tree. Parsing is streaming and incremental.
2. **CSSOM Construction**: CSS is **render-blocking**. The browser cannot build the Render Tree until the entire CSSOM is computed, because rules cascade and late rules can override early ones.
3. **JS Execution**: Synchronous `<script>` tags are **parser-blocking**. If a script is encountered, HTML parsing halts until the script is fetched, parsed, and executed. If there is pending CSS above the script, execution waits for CSSOM first (so JS can query computed styles).
4. **Render Tree**: Intersects visible DOM nodes with computed CSSOM rules. Nodes with `display: none` are excluded. Nodes with `visibility: hidden` or `opacity: 0` are **included** (they occupy geometric space).
5. **Layout (Reflow)**: Calculates physical coordinates and box dimensions relative to the viewport.
6. **Paint (Rasterization)**: Converts vector geometries and styling into pixel bitmaps across layers.
7. **Compositing**: GPU uploads layer textures to VRAM and composites them onto the screen.

### 3. Interview Pitch (2-Minute Answer)
> "The Critical Rendering Path is the multi-stage pipeline converting HTML, CSS, and JS into rendered pixels: DOM and CSSOM construction, merging them into a Render Tree, calculating geometric Layout, Raster Painting, and GPU Compositing. CSS is render-blocking because style cascade requires full evaluation, while synchronous JS is parser-blocking. To optimize it in production, I minimize render-blocking resources by inlining critical CSS, loading secondary styles asynchronously, using `defer` or `type='module'` for scripts, preloading critical above-the-fold assets via `<link rel='preload'>`, and animating strictly via GPU-composited properties like `transform` and `opacity` to bypass expensive reflows."

### 4. Senior Follow-Up Probes
- **Layout Thrashing (Forced Synchronous Layout)**: Interleaving DOM reads (`offsetWidth`, `getBoundingClientRect`) and writes in a loop forces synchronous layout on every iteration. *Fix: Batch all reads first, then batch writes.*
- **Script Attributes**: `defer` runs in order after DOM parsing before `DOMContentLoaded`; `async` runs out-of-order immediately upon arrival.

---

## 02. The Core Web Vitals (CWV)

### 1. Mental Model
Google’s three standardized user-centric metrics measuring loading speed, interactivity, and visual stability:

| Metric | Target | Measures | Primary Culprit |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | $\le \mathbf{2.5s}$ | Loading Speed | Slow server TTFB, unoptimized hero images, render-blocking CSS/JS. |
| **INP** (Interaction to Next Paint) | $\le \mathbf{200ms}$ | Responsiveness | Long JavaScript tasks (>50ms) blocking the main thread during user input. |
| **CLS** (Cumulative Layout Shift) | $\le \mathbf{0.1}$ | Visual Stability | Images/embeds without explicit dimensions, dynamic banner injections, late-loading web fonts. |

### 2. Under the Hood & Fixes
- **LCP Optimization**:
  - Preload the LCP hero image: `<link rel="preload" as="image" href="..." fetchpriority="high" />`.
  - Use modern formats (`AVIF`, `WebP`) with responsive `srcset`.
  - Ensure Edge CDN caching to keep TTFB $< 800\text{ms}$.
- **INP Optimization** (Replaced FID):
  - Measures total latency of clicks, taps, and keypresses across the full page lifecycle (worst-case $98^{\text{th}}$ percentile).
  - Break long tasks ($> 50\text{ms}$) using `scheduler.yield()`, `requestAnimationFrame()`, or `setTimeout(..., 0)`.
  - Offload heavy compute (filtering, parsing) to Web Workers.
- **CLS Optimization**:
  - Always provide `width` and `height` (or CSS `aspect-ratio`) on `<img>`, `<video>`, and `<iframe>`.
  - Reserve space for dynamic UI/ads using min-height skeletons.
  - Use `font-display: swap` paired with size-adjust fallback font metrics (`@font-face { size-adjust: ... }`) to eliminate FOIT/FOUT shift.

### 3. Interview Pitch (2-Minute Answer)
> "Core Web Vitals quantify real-user experience across three pillars: LCP for loading, INP for runtime interactivity, and CLS for layout stability. For LCP under 2.5s, I prioritize edge caching for low TTFB and use `fetchpriority='high'` with modern image formats for hero elements. For INP under 200ms, I eliminate long tasks on the main thread by breaking heavy computations via `scheduler.yield()`, using React transitions (`useTransition`) to prevent input locking, and offloading heavy tasks to Web Workers. For CLS under 0.1, I enforce explicit aspect ratios on all media, reserve slot heights for dynamic banners, and match web font fallback metrics."

---

## 03. HTTP Caching

### 1. Mental Model
Controlling where and for how long network responses are cached across browsers, intermediate proxies, and CDNs.

```
Client ──► Browser Cache ──► Edge CDN ──► Origin Server
```

### 2. Core Directives & Mechanics
- **`Cache-Control` Directives**:
  - `public`: Cacheable by browser and intermediate CDNs/proxies.
  - `private`: Cacheable **only** by the end-user's browser (e.g., user-specific HTML/data).
  - `max-age=N`: Time in seconds the browser considers the asset fresh.
  - `s-maxage=N`: Overrides `max-age` specifically for shared caches (CDNs).
  - `no-cache`: **Must revalidate** with origin server before using cached copy (uses ETag). It *does* store the response, unlike `no-store`.
  - `no-store`: Never cache anywhere. Used for sensitive PII or authentication endpoints.
  - `immutable`: Asset will never change during its `max-age` (skips revalidation even on page reload).
  - `stale-while-revalidate=N`: Serves stale cached content instantly while fetching the fresh version in the background.

- **Revalidation (Conditional Requests)**:
  - **ETag**: Hash of file content. Client sends `If-None-Match: "hash"`. Server returns `304 Not Modified` (0 body bytes) if unchanged.
  - **Last-Modified**: Timestamp. Client sends `If-Modified-Since`.

### 3. Production Golden Rule Strategy
1. **Hashed Static Assets** (JS, CSS, Images: `app.a8f9c1.js`):
   ```http
   Cache-Control: public, max-age=31536000, immutable
   ```
2. **HTML Entry Point** (`index.html`):
   ```http
   Cache-Control: no-cache
   ```
   *(Ensures clients check origin every time to fetch new asset hashes immediately upon deploy).*
3. **Dynamic Read APIs** (e.g., product catalog):
   ```http
   Cache-Control: public, s-maxage=60, stale-while-revalidate=300
   ```

### 4. Interview Pitch (2-Minute Answer)
> "In frontend architecture, caching hinges on separating immutable hashed assets from mutable entry points. For static assets (JS/CSS bundles with content hashes), I set `Cache-Control: public, max-age=31536000, immutable`, enabling aggressive browser and CDN caching. For `index.html`, I always use `Cache-Control: no-cache` so the browser revalidates via ETags on every navigation to guarantee immediate pickup of new deployments. For read-heavy API data, I leverage `stale-while-revalidate` to provide instant cache hits while asynchronously updating data in the background."

---

## 04. Content Negotiation

### 1. Mental Model
The HTTP protocol mechanism where the client advertises capabilities/preferences and the server selects the optimal format, compression, or language.

```
Client Header                   Server Response
────────────────────────────    ───────────────────────────────────────
Accept: image/avif,image/webp   Content-Type: image/avif
Accept-Encoding: zstd, br, gzip Content-Encoding: br
Accept-Language: fr-FR, fr      Content-Language: fr
                                Vary: Accept-Encoding, Accept, Accept-Language
```

### 2. Key Headers & CDN Interaction
- **Request Headers**:
  - `Accept`: Desired MIME type (`application/json`, `text/html`, `image/avif`).
  - `Accept-Encoding`: Supported compression algorithms (`zstd`, `br` [Brotli], `gzip`).
  - `Accept-Language`: Preferred locale (`en-US`, `es-ES`).
- **Response Headers**:
  - `Content-Type`, `Content-Encoding`, `Content-Language`.
  - **`Vary` Header (CRITICAL)**: Informs CDNs and caches which request headers were used to decide the response.
    - Example: `Vary: Accept-Encoding` ensures a CDN doesn't serve a Brotli-compressed response to a legacy client requesting gzip.

### 3. Interview Pitch (2-Minute Answer)
> "Content negotiation allows browsers to declare supported capabilities via headers like `Accept-Encoding`, `Accept`, and `Accept-Language`, enabling the server or CDN to serve the most optimized payload—such as Brotli compression over gzip, AVIF images over PNGs, or localized HTML. The most crucial architectural consideration is setting the `Vary` header (like `Vary: Accept-Encoding, Accept`) on the server so intermediate CDNs cache discrete variants per header combination and prevent serving incompatible compressed formats to unsupported clients."

---

## 05. Lazy Loading

### 1. Mental Model
Deferring the loading of non-critical resources (components, images, scripts, off-screen widgets) until they are actually needed in the viewport or requested by user intent.

### 2. Implementation Layers
1. **React Components**:
   ```tsx
   const HeavyChart = React.lazy(() => import('./HeavyChart'));
   
   <Suspense fallback={<ChartSkeleton />}>
     {showChart && <HeavyChart />}
   </Suspense>
   ```
2. **Native Media**:
   ```html
   <img src="large.webp" loading="lazy" decoding="async" width="800" height="600" />
   ```
3. **Viewport-Triggered (IntersectionObserver)**:
   - Observing sentinel DOM nodes to trigger fetches for infinite scroll lists, comments sections, or heavy iframe embeds.
4. **Interaction-Triggered (Prefetch on Hover/Intent)**:
   - Initiating dynamic `import()` when a user hovers over a button or tab before they actually click it.

### 3. Interview Pitch (2-Minute Answer)
> "Lazy loading reduces initial bundle size and critical bandwidth by deferring non-essential assets until required. I apply it across three tiers: Route and heavy-widget level in React using `React.lazy` and `Suspense`; media level using native `loading='lazy'` with explicit aspect ratios to avoid CLS; and interaction level by triggering dynamic imports on user hover or viewport entry via `IntersectionObserver`. Crucially, I never lazy load above-the-fold hero images or critical navigation bundles to protect LCP."

---

## 06. Bundle Splitting & Tree Shaking

### 1. Mental Model
- **Bundle Splitting**: Dividing a single monolithic JavaScript bundle into smaller, parallel, cacheable chunks.
- **Tree Shaking**: Static dead-code elimination that removes unused exports from the final production bundle.

```
Monolithic Bundle (2MB) ──► [ Route Chunks ] (100KB each)
                        ──► [ Vendor / React Chunk ] (140KB, long-term cached)
                        ──► [ Dead Code Stripped via Tree Shaking ]
```

### 2. Under the Hood & Requirements
- **Tree Shaking Mechanics**:
  - Relies entirely on static **ES Modules (`import`/`export`)**. CommonJS (`require()`) cannot be reliably tree-shaken because imports are dynamic and evaluated at runtime.
  - Bundlers (Webpack, Rollup, Vite/esbuild) trace the dependency graph from entry points, mark exported symbols that are never imported, and eliminate them during minification (Terser/TSReg).
  - **`package.json` `"sideEffects": false`**: Informs the bundler that unused imported files contain no global mutations (like polyfills or CSS imports) and can be completely pruned.
- **Chunking Strategies**:
  - **Route-based**: Each route has its own chunk loaded on navigation.
  - **Vendor chunking**: Splitting stable node_modules (e.g., React, TanStack) from rapidly changing application code to preserve client browser cache.

### 3. Interview Pitch (2-Minute Answer)
> "Bundle splitting breaks applications into route-level and vendor-level chunks to optimize caching and parallel downloads, while tree shaking statically strips unused code. Tree shaking requires standard ES Module syntax and explicit `'sideEffects': false` annotations in `package.json` to safely drop unused files. In enterprise apps, I prevent bundle bloat by avoiding broad barrel-file re-exports and auditing chunk distributions using tools like Webpack Bundle Analyzer or Vite Visualizer."

---

## 07. Critical CSS

### 1. Mental Model
Extracting the absolute minimum CSS required to render the above-the-fold content of a webpage and inlining it directly into the HTML `<head>`, while deferring the remaining styles.

```html
<head>
  <!-- 1. Inlined Critical CSS (zero HTTP roundtrips, instant FCP) -->
  <style>
    body { margin: 0; font-family: sans-serif; }
    .header { height: 60px; background: #fff; }
    .hero { min-height: 400px; display: flex; }
  </style>

  <!-- 2. Non-critical CSS loaded asynchronously -->
  <link rel="preload" href="full-styles.css" as="style" onload="this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="full-styles.css" /></noscript>
</head>
```

### 2. Why It Matters for Performance
- External `<link rel="stylesheet">` tags block the browser from constructing the Render Tree until the network request completes.
- Inlining critical CSS allows the browser to paint First Contentful Paint (FCP) immediately after receiving the first HTML packet, completely eliminating the CSS network latency bottleneck.

### 3. Interview Pitch (2-Minute Answer)
> "Because CSS is render-blocking, external stylesheets introduce network roundtrips before the browser can paint anything. Critical CSS extracts the minimum styles needed for the immediate above-the-fold viewport and inlines them directly inside `<style>` tags in the HTML `<head>`. Non-critical styles are loaded asynchronously via `<link rel='preload' as='style'>`. This achieves immediate First Contentful Paint and optimal LCP, which is standard in modern SSR frameworks like Next.js and Tailwind setups."

---

## 08. Essential State vs. Derived State

### 1. Mental Model
- **Essential State**: The bare minimum raw data needed to represent the application's single source of truth.
- **Derived State**: Any value that can be deterministically computed from essential state or props during render.

```
Essential State (useState):      Derived Values (Computed on the fly):
- raw items: Item[]         ──►  - filteredItems = items.filter(...)
- searchQuery: string       ──►  - selectedCount = selectedIds.size
- selectedIds: Set<string>  ──►  - isAllSelected = selectedIds.size === items.length
```

### 2. Golden Rules
1. **Never duplicate state**: Do not copy props or parent state into local `useState`.
2. **Never sync state in `useEffect`**: Syncing derived state in `useEffect` causes extra re-renders, race conditions, and out-of-sync bugs.
3. **Compute in render body**:
   ```tsx
   // ❌ BAD: Redundant state + useEffect synchronization
   const [items, setItems] = useState<Item[]>([]);
   const [filtered, setFiltered] = useState<Item[]>([]);
   useEffect(() => {
     setFiltered(items.filter(i => i.status === 'active'));
   }, [items]); // Extra render cycle + stale frame!

   // ✅ GOOD: Derived state computed during render (pure & instantaneous)
   const [items, setItems] = useState<Item[]>([]);
   const [filter, setFilter] = useState('active');
   const filtered = useMemo(() => items.filter(i => i.status === filter), [items, filter]);
   ```

### 3. Interview Pitch (2-Minute Answer)
> "A core tenet of robust React architecture is keeping state minimal and normalized. Essential state holds the raw source of truth, while derived state is computed purely during render. Storing derived values in `useState` and synchronizing them via `useEffect` introduces anti-patterns, redundant render cycles, and UI desynchronization. If a computation is expensive across thousands of records, I wrap it in `useMemo`, but I never store computed values in independent state."

---

## 09. The Reducer Pattern

### 1. Mental Model
A design pattern where all state mutations are expressed as explicit action objects processed by a pure function:
$$\text{reducer}(\text{state}, \text{action}) \rightarrow \text{newState}$$

```
User Click ──► dispatch({ type: 'REVOKE_ITEM', payload: { id: '123' } })
                 │
                 ▼
         [ Pure Reducer ] ──► Returns New Immutable State
```

### 2. Why Use Reducers over Multiple `useState`?
1. **Deterministic State Transitions**: Eliminates impossible states (e.g., `isLoading: true` AND `error: "Failed"` occurring together).
2. **Complex Multi-Field Logic**: Handles coordinated updates (e.g., selecting all checkboxes, updating page index, and resetting selections in a single step).
3. **100% Testable**: Reducers are pure functions without DOM or React hook dependencies—unit testing requires no mocks or component harnesses.

### 3. Comparison in React Ecosystem
- **`useReducer`**: Built-in React hook for localized component-tree state machines.
- **Redux Toolkit (RTK)**: Enterprise standard for complex, app-wide client state with DevTools time-travel debugging.
- **Zustand**: Lightweight flux store combining hook simplicity with reducer-like action patterns.

### 4. Interview Pitch (2-Minute Answer)
> "The Reducer Pattern models state as a formal finite state machine using a pure `(state, action) => newState` function. It replaces scattered, interdependent `useState` hooks with centralized, deterministic action dispatches. This prevents intermediate invalid states when multiple fields change together, decouples UI event triggers from state transition logic, and makes business logic 100% unit-testable without needing React rendering environments."

---

## 10. Windowing (List Virtualization)

### 1. Mental Model
Rendering only the small subset of DOM elements currently visible inside the viewport scroll container (+ small overscan buffer), rather than rendering thousands of DOM nodes.

```
Total Items: 50,000 items
Viewport Height: 600px ──► Only ~20 <tr> DOM nodes rendered in the DOM Tree
                           Absolute positioning offsets simulate full 50,000 item scrollbar
```

### 2. Mechanics & Considerations
- **DOM Footprint**: Browsers struggle when rendering $> 1,500$ complex DOM nodes (causing high memory usage, slow style calculations, and sluggish layout passes).
- **Libraries**: `TanStack Virtual` (`useVirtualizer`), `react-window`, `react-virtualized`.
- **Key Challenges & Solutions**:
  - **Dynamic Item Heights**: Measure DOM element heights dynamically using `ResizeObserver` and update offset caches.
  - **Accessibility (a11y)**: Screen readers cannot browse unrendered DOM rows. Use ARIA attributes (`aria-rowcount`, `aria-rowindex`) and provide alternative search/filtering capabilities.
  - **Ctrl+F / In-page Search**: Native browser search fails for unmounted rows. Provide an integrated search input that queries the full memory dataset and scrolls the virtualizer to matching indexes.

### 3. Interview Pitch (2-Minute Answer)
> "Windowing or virtualization renders only the visible slice of DOM nodes in the active scroll viewport plus an overscan buffer, keeping DOM nodes constant regardless of list size (e.g., 20 nodes for 50,000 rows). This prevents memory bloat and maintains 60fps scrolling. In enterprise tables, key technical challenges include dynamic row height measurement via `ResizeObserver`, handling scroll restoration, and mitigating accessibility gaps by attaching `aria-rowcount` and `aria-rowindex` so assistive technologies understand the complete dataset size."

---

## 11. Server-Side Rendering (SSR)

### 1. Mental Model
Rendering React components to a full HTML string on the server per request and streaming it to the client browser, rather than sending an empty `<div id="root"></div>`.

```
Browser Request ──► Server executes React (renderToPipeableStream)
                ──► Streams complete HTML chunks ──► Browser paints HTML (FCP)
                ──► Downloads JS bundle ──► Hydrates DOM (Interactive / TTI)
```

### 2. Trade-offs (SSR vs. CSR)
| Metric / Feature | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
|---|---|---|
| **TTFB (Time to First Byte)** | Fast (Static HTML file from CDN) | Slower (Server execution & DB queries) |
| **FCP (First Contentful Paint)** | Slow (Blank screen until JS runs) | Fast (Immediate rendered HTML) |
| **SEO & Crawlers** | Relies on crawler JS execution | Guaranteed full HTML indexing |
| **Server Compute Cost** | \$0 (Static hosting / S3) | Ongoing Node/Edge server compute |

### 3. Interview Pitch (2-Minute Answer)
> "Server-Side Rendering generates HTML dynamically on the server for each incoming HTTP request using APIs like `renderToPipeableStream`. This provides fast First Contentful Paint and reliable SEO indexing since the browser receives meaningful markup immediately. The trade-off is higher TTFB due to server compute and data fetching, along with the 'uncanny valley' gap where the UI is visually painted but not yet interactive until client-side hydration completes."

---

## 12. Rehydration (Client-Side Hydration)

### 1. Mental Model
The client-side process where React walks the existing server-generated HTML DOM, matches it to the newly constructed client Fiber tree, and attaches event listeners to make the page interactive.

```
Server HTML in Browser (Static UI)
          ▼
Client JS Bundle Executes React
          ▼
Walks DOM Nodes ──► Builds Fiber Tree ──► Attaches Event Handlers ──► UI is Interactive
```

### 2. Hydration Mismatches & Fixes
A hydration error occurs when server-rendered HTML differs from the initial client render tree.
- **Common Causes**:
  - `typeof window !== 'undefined'` checks during render.
  - Non-deterministic values: `Date.now()`, `Math.random()`.
  - Browser-specific data: `localStorage`, user timezone formatting.
  - Invalid HTML nesting (e.g., `<p>` inside `<p>`, or `<div>` inside `<table>`).
- **Fix**: Defer client-only rendering until after mount using a `mounted` state in `useEffect` or React 19's `useSyncExternalStore`.

### 3. Modern Evolution: Selective / Streaming Hydration (React 18+)
Wrapping components in `<Suspense>` allows React to stream HTML chunks and hydrate discrete UI islands independently without blocking the entire page on slow queries.

### 4. Interview Pitch (2-Minute Answer)
> "Rehydration is the bridge between static SSR HTML and full React interactivity. React boots up in the browser, walks the existing DOM elements, reconstructs the internal Fiber tree, and binds event listeners without recreating DOM nodes from scratch. Hydration mismatches occur when server and client render outputs diverge—such as using `window` globals or random timestamps during render. With React 18+ Selective Hydration, `<Suspense>` boundaries allow discrete component subtrees to stream and hydrate independently as bundles arrive."

---

## 13. Partial Pre-rendering (PPR)

### 1. Mental Model
A hybrid rendering architecture that combines the instant speed of static edge caching with the dynamic capabilities of server streaming in a **single HTTP connection**.

```
Single HTTP Response:
├── Chunk 1 (Instant from Edge CDN): Static Shell (Nav, Layout, Skeletons)
└── Chunk 2 (Streamed from Server): Dynamic Suspense Holes (User Profile, Live Feed)
```

### 2. How It Works (Next.js 14+/15)
1. At build time, the page's static shell (everything outside `<Suspense>` boundaries) is pre-rendered and distributed across global Edge CDNs.
2. When a user requests the page, the CDN serves the static shell immediately ($< 50\text{ms}$ TTFB).
3. The dynamic components wrapped in `<Suspense>` are executed concurrently on the server and their HTML is streamed into the pre-rendered shell holes over the same open HTTP stream.

### 3. Interview Pitch (2-Minute Answer)
> "Partial Pre-rendering merges the best of static and dynamic rendering into a unified model. The static layout shell (headers, sidebars, placeholder skeletons) is pre-rendered at build time and served immediately from edge CDNs for ultra-low TTFB. Dynamic user-specific components inside `<Suspense>` boundaries are resolved concurrently on the server and streamed into the page over the same HTTP connection, eliminating the traditional binary choice between fully static or fully server-rendered pages."

---

## 14. React Server Components (RSC)

### 1. Mental Model
Components that execute **exclusively on the server** and never ship JavaScript to the client browser bundle.

```
Server:                                Client:
[ Server Component ]                   [ Client Component ('use client') ]
- Accesses DB / Filesystem directly     - Manages useState / useEffect
- 0KB JS sent to browser               - Handles onClick, onChange, DOM events
- Outputs serialized JSON stream (RSC wire format)
```

### 2. RSC vs. SSR (Key Distinction for Interviews!)
- **SSR**: Executes components on the server to output an **HTML string** for initial paint, but *still ships the full component JS bundle to the browser for hydration*.
- **RSC**: Executes components on the server to output a **serialized virtual DOM stream (RSC wire format)**. Its dependencies and code **never get added to the client JS bundle**.

### 3. The `'use client'` Directive
- It does **not** mean "render only on the client".
- It defines the **boundary** between the Server Component module graph and the Client Component module graph. Components with `'use client'` are still pre-rendered on the server during SSR, but their JavaScript bundle is shipped to the browser for client interactivity.

### 4. Interview Pitch (2-Minute Answer)
> "React Server Components run exclusively on the server and serialize into a streamable JSON wire format rather than shipping JavaScript to the client. This allows direct database and internal service access with zero client bundle overhead. In contrast to SSR—which generates initial HTML but still requires full client-side JS hydration—RSC code never leaves the server. The `'use client'` directive marks the boundary where client interactivity, hooks, and browser APIs are required."

---

## 15. Micro Frontends

### 1. Mental Model
An architectural style where independently deliverable frontend applications created by semi-autonomous teams are composed into a unified customer-facing application.

```
                  ┌─────────────────────────────────────┐
                  │          Host / Shell App           │
                  │  (Global Nav, Auth, Routing, Theme) │
                  └───────┬─────────────────────┬───────┘
                          │                     │
          ┌───────────────▼──────┐       ┌──────▼──────────────┐
          │ MFE 1: Auth & Access │       │ MFE 2: Audit Logs   │
          │ (Team Identity)      │       │ (Team Compliance)   │
          └──────────────────────┘       └─────────────────────┘
```

### 2. Integration Strategies & Comparison
| Strategy | Pros | Cons |
|---|---|---|
| **Module Federation (Webpack 5 / Vite)** | Dynamic runtime loading, shared singleton dependencies (`react`, `react-dom`), seamless SPA navigation. | Version skew risks, shared build tool configuration complexity. |
| **Web Components (Custom Elements)** | Framework agnostic (Angular inside React), strong Shadow DOM CSS encapsulation. | Difficult SSR integration, complex cross-boundary state sharing. |
| **iFrames** | Complete hard isolation, zero CSS/JS collision risk, independent security blast radius. | Terrible UX/responsive resizing, broken deep linking, duplicate memory overhead. |

### 3. Critical Production Pitfalls & Mitigations
- **Dependency Duplication**: If Team A uses React 18 and Team B uses React 19 without strict Module Federation singleton configuration, the browser downloads both bundles.
- **CSS Leakage**: Global stylesheets bleeding into other remotes. *Fix: CSS Modules, Tailwind prefixed namespaces, or Shadow DOM.*
- **Routing Desynchronization**: Conflicting router history listeners. *Fix: Host shell owns browser URL history and dispatches scoped sub-routes to micro-apps via custom events or props.*

### 4. Interview Pitch (2-Minute Answer)
> "Micro Frontends decompose large frontend codebases into independently developed, tested, and deployed domain applications composed at runtime via Module Federation or Web Components. They solve organizational scaling bottlenecks across large engineering teams. However, they introduce architectural risks—notably bundle duplication, CSS collisions, and routing fragmentation. To succeed in production, the host shell must strictly manage shared dependency singletons (like React and core design tokens), enforce CSS scoping, and govern centralized routing."

---

## 📊 Quick Summary Matrix for Instant Revision

| # | Concept | Primary Focus | Best Used For / Key Benefit |
|---|---|---|---|
| **01** | **CRP** | DOM $\rightarrow$ CSSOM $\rightarrow$ Layout $\rightarrow$ Paint $\rightarrow$ Composite | Eliminating render-blocking CSS/JS to maximize rendering speed. |
| **02** | **CWV** | LCP ($\le 2.5s$), INP ($\le 200ms$), CLS ($\le 0.1$) | Quantifying user-centric performance and Google search ranking. |
| **03** | **HTTP Caching** | `max-age`, `immutable`, `no-cache`, `ETag` | Hashing static assets (1yr cache) while revalidating `index.html`. |
| **04** | **Content Negotiation** | `Accept-Encoding: br`, `Vary` | Serving optimal compression (Brotli/zstd) and modern media (AVIF). |
| **05** | **Lazy Loading** | `React.lazy`, `Suspense`, `IntersectionObserver` | Deferring non-critical components/media to save initial bandwidth. |
| **06** | **Bundle Splitting** | Route Chunks, Tree Shaking, `"sideEffects": false` | Dropping dead code and caching stable vendor chunks. |
| **07** | **Critical CSS** | Inlining above-the-fold styles in `<head>` | Instant First Contentful Paint without waiting for stylesheet downloads. |
| **08** | **Essential State** | Minimal raw state + render-time derivation | Eliminating bugs and re-renders caused by syncing state in `useEffect`. |
| **09** | **Reducer Pattern** | `(state, action) => newState` | Deterministic state machines for complex multi-field transitions. |
| **10** | **Windowing** | `TanStack Virtual`, viewport DOM slicing | Rendering massive tables/lists (50k+ rows) without DOM bloat. |
| **11** | **SSR** | `renderToPipeableStream` | Fast FCP and guaranteed SEO crawlers at the cost of server compute. |
| **12** | **Rehydration** | DOM walking, Fiber attachment, Hydration errors | Bridging static server HTML to interactive client-side React. |
| **13** | **PPR** | Static edge shell + Dynamic Suspense stream | Best-of-both: Edge CDN TTFB with streaming dynamic content. |
| **14** | **RSC** | Zero-bundle server execution, RSC wire format | Direct backend/DB access without sending JS dependencies to client. |
| **15** | **Micro Frontends** | Module Federation, Shell App, Remotes | Scaling large org teams with independent deployment pipelines. |
