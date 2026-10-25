# Frontend Interview Prep — Master Backlog

> Consolidated view of all question types, specs, and learning tracks  
> Updated: 2026-09-05 (Day 24) — React Phase Active, E-Commerce Cart Flow in progress

---

## Output-Based Questions — JavaScript

### ✅ Completed (27 questions)

1. Event Loop Output
2. var vs let in loop
3. forEach this context
4. Promise constructor sync
5. await reject + try/catch
6. x += await stale capture
7. Hoisting: function decl vs expr
8. Coercion chain (7 outputs)
9. Filter & Map chain
10. Nullish vs OR vs AND
11. Generator Protocol (yield)
12. Hoisting var/let/const
13. Spread vs rest + string spread
14. Microtask drain ordering
15. Type coercion == minefield (5 outputs)
16. Array reference assignment
17. Rest destructuring
18. Promise.race vs Promise.all
19. reduce filter-map
20. Object reference equality
21. this + Arrow + Call
22. Call + Coercion (this binding)
23. Reduce + TDZ
24. Bind + Closures
25. Hoisting + this (strict/TDZ/call)
26. Async/await execution order
27. typeof quirks

### ⏳ Backlog — Core JS (13 questions, ordered by priority)

1. **Apply + Filter with `this` binding** — .apply() with array methods, context switching
2. **Prototype + Inheritance pattern** — prototype chain lookups, constructor property, instanceof edge cases
3. **Closure + setTimeout + var vs let loop (deep)** — variable capture in async, closure + time dimension
4. **WeakMap/WeakSet** — garbage collection, why weak references matter, memory management
5. **Proxy & Reflect** — intercept, get/set traps, defensive patterns, invariants
6. **Symbol behavior** — uniqueness, symbol as keys, well-known symbols (Symbol.iterator, etc.)
7. **Async Generators** — async yield, for await...of, async iteration protocol
8. **Logical Assignment Operators** — `||=`, `&&=`, `??=` with side effects, short-circuit evaluation
9. **Template Literal Tags** — custom string parsing, transform functions, DSLs
10. **Getters/Setters** — property descriptors, Object.defineProperty, triggering side effects
11. **Optional Chaining + Nullish Coalescing** — edge cases, order of operations, with function calls
12. **Destructuring Edge Cases** — nested destructuring, default values with falsy, rest in objects
13. **Set/Map Iteration & WeakMap pitfalls** — iteration order, size property, garbage collection

---

## React Concepts & Patterns — Mastery Program (Days 23+)

### ✅ React Output-Based Questions (1 completed, 9 queued)

1. ✅ **useEffect & Dependencies (Q1)** — Mount sequence, cleanup timing, dependency changes
   - Console output: Effect order on mount, cleanup before re-run on dependency change
   - Follow-ups: multiple clicks, dependency array changes, unrelated state updates

### ⏳ Queued React Output (9 questions)

1. **JSX — what is it, what does it compile to?**
   - JSX → React.createElement calls
   - Element vs Component
   - Props spreading, children

2. **Virtual DOM — how it works, advantages, disadvantages**
   - Diffing algorithm
   - Key reconciliation
   - When reconciliation fails (keys, lists)

3. **Controlled vs Uncontrolled Inputs**
   - State-driven vs DOM-driven
   - Form patterns
   - useRef vs useState for forms

4. **Common Hooks (useState, useEffect, useRef, useMemo, useCallback)**
   - When to use each
   - Dependency arrays
   - Cleanup functions
   - useRef for DOM access

5. **useMemo vs useCallback — When to use which**
   - Memoization tradeoffs
   - Unnecessary memoization pitfalls
   - Reference equality problems

### Part B: Advanced Patterns (5 concepts)

6. **useRef — How it differs from useState**
   - Persistence without re-render
   - useRef.current vs state
   - DOM node access
   - Imperative handles

7. **Context API — What, when, when NOT**
   - Context creation + Provider
   - useContext hook
   - Performance pitfalls (provider value, re-renders)
   - Alternatives (state management)

8. **State Management — Local vs Global vs Server**
   - Lifting state up
   - Context + useReducer
   - External libraries (Redux, Zustand, Jotai)
   - Server state (React Query, SWR)

9. **React Performance — Pitfalls & Optimization**
   - Component re-render causes
   - memo(), useMemo, useCallback
   - Code splitting (lazy loading)
   - Bundle analysis

10. **React Best Practices + Code Structure**
    - Component composition patterns
    - Separation of concerns
    - Custom hooks design
    - Error boundaries

### ⏳ Queued React Output (9 questions)

2. **useEffect Dependency Traps** — Missing deps, stale closures, infinite loops
3. **React.memo doesn't work** — Why memoization failed, reference equality
4. **Key Prop Pitfalls** — Rendering with index, UUID, why key matters
5. **Async State Updates** — Race conditions, cleanup, AbortController pattern
6. **Context Consumer Re-renders** — Provider value changes, why consumers re-render
7. **useCallback Circular Dependencies** — When useCallback needs deps, when to avoid
8. **Lifting State Pitfalls** — Prop drilling, unnecessary re-renders, solutions
9. **Custom Hook Reusability** — State isolation, shared logic, naming conventions
10. **Effect Cleanup Timing** — When cleanup runs, multiple effects, unmount vs dependency change
11. **Render Prop vs HOC** — Which re-renders, which doesn't, closure issues

### Part D: React Bug Hunt (5 code review tasks)

12. **Find the bug: Infinite Loop** — useEffect dependency issues
13. **Find the bug: Stale Closure** — Event handler capturing old state
14. **Find the bug: Memory Leak** — Event listener not unsubscribed, cleanup missing
15. **Find the bug: Unnecessary Re-render** — Memoization not working, why
16. **Find the bug: Wrong Key** — List rendering with index keys causing state loss

---

## Machine Coding — With Full Specs

### ✅ Completed in Local Repo (1 question)

1. ✅ **Nested Comments** — Present in `src/Comment.tsx`, `src/CommentList.tsx`

---

## 📁 Local Component Folder Structure (`src/components/`)

All folders created. Ready to rebuild from specs below.

| Folder Name | Component / Description | Status | Time Target |
| :--- | :--- | :--- | :--- |
| `access-review-console/` | Access Review Console (Tuebora Company Drill: bulk actions, debounced search, modal, indeterminate select, optimistic UI) | 🎯 Priority Queued | 50 min |
| `data-table-with-sorting/` | Nested Data Table with Sorting (randomuser API, deepFlatten) | In Progress (Day 30) | 50 min |
| `drag-and-drop-kanban/` | Drag and Drop / Kanban Board (layout only, no drop logic yet) | Partial | 60 min |
| `e-commerce-cart/` | E-Commerce Cart Flow (Paginated, Router, Context) | In Progress (Day 24/25) | 110 min |
| `file-explorer/` | Recursive File Explorer / Folder Tree (GitHub API) | To Rebuild | 45 min |
| `flip-card/` | Flashcard Quiz / CSS 3D Flip Card (Open Trivia DB) | To Rebuild | 45 min |
| `infinte-scroll/` | Infinite Scroll with IntersectionObserver | To Rebuild | 35 min |
| `input-form/` | Multi-Field Form Validation (name/email/phone) | In Progress (Day 13) | 45 min |
| `job-board/` | Job Board (Hacker News API, Load More) | To Rebuild | 30 min |
| `nested-comments/` | Nested Comments tree & recursive rendering | ✅ Completed | — |
| `product-cart/` | Product Cart with Discounts & Coupons (GRAB50) | To Rebuild | 60 min |
| `reddit-style-comments/` | Reddit-Style Comments with Voting & Deep Nesting | To Rebuild | 60 min |
| `rick-morty/` | Rick & Morty Characters Viewer (filter, sort) | To Rebuild | 50 min |
| `simple-input-form/` | Controlled Inputs & Basic Form States | To Rebuild | 25 min |
| `star-rating/` | Star Rating (Click + Hover + Fractional Fills) | To Rebuild | 30 min |
| `tab-component/` | Tabs Component with Controlled Active State | To Rebuild | 30 min |
| `toast-notification/` | Toast Notification System with custom hook | To Rebuild | 45 min |
| `user-card/` | CSS User Directory / Flip Cards (3D transform) | To Rebuild | 60 min |
| `user-directory/` | User Directory (TypeScript + API + Filter) | To Rebuild | 60 min |

---

## Machine Coding — Detailed Specs (Recovered from Previous Laptop)

All specs below are recovered from actual source code at `/Users/a290036676/Documents/repos/component-creation/src/components` on your previous machine.

---

## 🎯 Company Specific Machine Coding Drills

### 0. Tuebora Company Machine Coding Drill: Access Review Console — 50 min

**Folder**: `access-review-console/` (or `src/components/access-review-console/`)  
**Target Time**: 50 minutes (30 min MVP + 10 min bulk actions/modals + 10 min optimistic UI/polish)  
**Target Role/Context**: Tuebora Identity Governance & Access Management (IGA / Access Certification)

**Scenario**:
A manager certifies their team's access. Each row represents one entitlement: a user, an application, an assigned entitlement, a risk level, and a decision status (`pending`, `approved`, `revoked`).

**TypeScript Data Types**:
```ts
export type RiskLevel = 'low' | 'medium' | 'high';
export type DecisionStatus = 'pending' | 'approved' | 'revoked';

export type Item = {
  id: string;
  user: string;
  app: string;
  entitlement: string;
  risk: RiskLevel;
  lastUsed: string; // ISO date string e.g. "2026-08-15T10:30:00Z"
  status: DecisionStatus;
};

export type FetchItemsParams = {
  page: number;
  pageSize: number;
  search?: string;
  risk?: RiskLevel | 'all';
  status?: DecisionStatus | 'all';
};

export type FetchItemsResponse = {
  items: Item[];
  total: number;
};
```

**Mock API Requirements**:
1. `fetchItems({ page, pageSize, search, risk, status })`:
   - Returns `{ items: Item[], total: number }` from ~500 generated mock rows.
   - Simulates realistic network latency (300ms–800ms random delay).
   - Supports server-side pagination, search matching (`user`, `app`, `entitlement`), and risk/status filtering.
2. `submitDecisions(ids: string[], decision: 'approved' | 'revoked', reason?: string)`:
   - Persists status updates to the in-memory dataset.
   - Simulates a ~10% random network failure rate to test optimistic rollback handling.

**Requirements Breakdown**:

- **Must-Have (Core 30 min MVP)**:
  1. **Table with Server-Side Pagination**: 25 items per page with Next / Prev / Page Count controls and total record badge.
  2. **Debounced Search & Filters**:
     - Search input debounced by 300ms (filtering `user`, `app`, `entitlement`).
     - Risk filter dropdown (`all`, `low`, `medium`, `high`) and Status filter dropdown (`all`, `pending`, `approved`, `revoked`).
     - Any filter or search change immediately resets pagination to Page 1.
  3. **Selection & Indeterminate Checkbox**:
     - Row checkboxes for single-item selection.
     - Header "Select All on Page" checkbox that reflects an **indeterminate** DOM state when partially selected (via `useRef` + `ref.current.indeterminate = true`).
  4. **Bulk Action Controls**:
     - "Approve Selected" (immediate bulk mutation).
     - "Revoke Selected" (opens confirmation modal requiring a mandatory non-empty reason text input).
  5. **Status States**: Loading skeleton/spinner, empty filter state ("No matching entitlements found"), and error banner with retry.

- **Should-Have (10 min Polish & Reliability)**:
  6. **Optimistic Updates with Rollback**: Immediately update local UI state upon action, take snapshot of previous state, and rollback with an error toast if `submitDecisions` fails.
  7. **Page-Change Selection Strategy**: Deliberate design on whether selected IDs persist across pagination pages vs page-scoped selection (documenting the trade-off between `Set<string>` of IDs vs "Select all N matching").
  8. **Accessibility (a11y)**:
     - Clear `aria-label` / `aria-labelledby` on all table row checkboxes.
     - Accessible modal dialog with focus trapping (`aria-modal="true"`, `role="dialog"`, Esc to close, focus return).
     - `aria-live="polite"` region for dynamic result count updates.

- **Stretch Goals**:
  - Multi-column sorting (e.g. sort by `lastUsed` or `risk` severity).
  - Sync filters and page state to URL query parameters (`URLSearchParams`).
  - Undo action for recent decisions.
  - Virtualized table rows for 100k records.
  - Business Rule Guardrail: Reviewers are restricted from revoking `high` risk items without elevated justification.

**Rules & Constraints**:
- **First pass MUST use plain React hooks** (no TanStack Table, no MUI/AntD, no third-party table libraries).
- Verbalize what TanStack Query (`useQuery`, `useMutation`, `queryClient.setQueryData`, `queryClient.invalidateQueries`) would replace in production.
- Think out loud and explain trade-offs continuously.
- Zero AI generation during live drill.

**Suggested Timing Breakdown**:
- `00:00 - 05:00`: Planning — Define state ownership, component tree, API signatures, race-condition strategy (`AbortController`).
- `05:00 - 30:00`: Core Implementation — Mock API generator, paginated table, debounced search hook, filter dropdowns, loading/empty states.
- `30:00 - 40:00`: Bulk Actions & Modals — Selection map/set, indeterminate checkbox ref, bulk approve, revoke modal dialog + reason validation.
- `40:00 - 50:00`: Production Hardening — Optimistic UI update with rollback snapshot, error toast, keyboard a11y, follow-up readiness.

**ASCII UI Mockup**:
```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🛡️ Access Review Console — Q3 Certification Campaign                         [Admin Persona]│
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Search: [ 🔍 Filter by user, app, or entitlement... (debounced 300ms) ]                     │
│ Risk: [ All Risks ▼ ]   Status: [ Pending ▼ ]                   Showing: 1-25 of 142 items   │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Actions for 3 selected items:  [ ✅ Approve (3) ]   [ 🚫 Revoke (3) ]                       │
├──────┬──────────────────────┬─────────────┬──────────────────────────┬────────┬─────────────┤
│ [─]  │ User                 │ Application │ Entitlement              │ Risk   │ Status      │
├──────┼──────────────────────┼─────────────┼──────────────────────────┼────────┼─────────────┤
│ [x]  │ alex.rivera@corp.io  │ AWS-Prod    │ IAM:AdministratorAccess  │ [HIGH] │ ⏳ Pending   │
│ [x]  │ sarah.chen@corp.io   │ Snowflake   │ DB_ANALYTICS_READWRITE   │ [MED]  │ ⏳ Pending   │
│ [x]  │ marco.rossi@corp.io  │ GitHub-Org  │ Org Owner Permission     │ [HIGH] │ ⏳ Pending   │
│ [ ]  │ priya.patel@corp.io  │ Salesforce  │ Standard User            │ [LOW]  │ ✅ Approved  │
│ [ ]  │ david.kim@corp.io    │ Jira        │ Software Developer       │ [LOW]  │ 🚫 Revoked   │
├──────┴──────────────────────┴─────────────┴──────────────────────────┴────────┴─────────────┤
│ « First   ‹ Prev   Page 1 of 6   Next ›   Last »                       [ 25 items / page ▼ ]│
└─────────────────────────────────────────────────────────────────────────────────────────────┘

Modal Overlay (when clicking "Revoke"):
┌─────────────────────────────────────────────────────────┐
│ ⚠️ Confirm Access Revocation (3 entitlements selected)  │
├─────────────────────────────────────────────────────────┤
│ Please specify the compliance reason for revocation:    │
│ [ Entitlement no longer required for current role...  ] │
│                                                         │
│ [ Cancel ]                                [ Confirm Revoke (3) ]│
└─────────────────────────────────────────────────────────┘
```

**What Interviewers Watch For**:
- **State Ownership**: Single source of truth for query params; derived values (e.g. `isAllSelected`, `isIndeterminate`) calculated on the fly without extra syncing state.
- **Race Condition Handling**: Using `AbortController` or active request timestamps in `useEffect` so slow out-of-order API responses never overwrite newer filtered responses.
- **Selection Integrity**: Avoiding bugs where stale IDs remain selected across filter changes or deleted rows.
- **Clean Event-Driven Actions**: Triggering mutations from user click handlers, NOT inside reactive `useEffect` triggers.
- **Failure Resilience**: Seamless state restoration when mock API rejects the bulk payload.

**Likely Follow-up Probes**:
1. *Scalability*: How does this architecture change if the dataset scales from 500 to 100,000 rows? (Windowing/virtualization, server-side cursor streaming, client memory footprint).
2. *Configurable Personas*: How would you make table columns, visible actions, and approval policies dynamically configurable per department/persona without code changes?
3. *Testing Strategy*: How would you structure unit and integration tests (React Testing Library + MSW) for the debounced search, indeterminate selection, and optimistic rollback?

---

## Detailed Component Specs (From Previous Laptop Source Code)

### 1. Job Board — 30 min

**Folder**: `job-board/`

**API**: `https://hacker-news.firebaseio.com/v0/jobstories.json`

**Requirements**:
- Fetch Hacker News job story IDs from API
- Render 6 jobs initially
- Fetch each job detail separately using its ID
- Show job title as clickable external link
- Show author name and formatted timestamp (MM/DD/YYYY, HH:MM)
- Add "Load more jobs" button that appends 6 more jobs each click
- Show loading state while job IDs are loading
- Show loading state for each job card while details request completes

**UI**:
```
┌──────────────────────────────────────┐
│ Hacker News Jobs Board               │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │ Job title link                   │ │
│ │ by author   MM/DD/YYYY, HH:MM    │ │
│ └──────────────────────────────────┘ │
│                                      │
│         [ Load more jobs ]           │
└──────────────────────────────────────┘
```

**Look and feel**: Beige page background, white bordered cards, orange title and button

---

### 2. Nested Comments — Completed ✅

**Folder**: `nested-comments/`

**Requirements**:
- Seed app with nested mock comments
- Add new top-level comments from input field
- Allow replying to any comment at any depth
- Toggle reply input inline per comment
- Submit reply and attach to correct node recursively
- Clear local reply input after submit
- Preserve nested tree structure on every update

**UI**:
```
Comment Section

[ Type a comment...              ] [Add Comment]

Happy New Year folks! What are your resolutions?
[Add a reply]
  Same to you. I am planning to join a gym.
  [Add a reply]
    I tried last year and gave up.
    [Add a reply]
```

**Look and feel**: Centered column, nested replies indented with left border

---

### 3. User Directory (TypeScript) — 60 min

**Folder**: `user-directory/`

**API**: `https://jsonplaceholder.typicode.com/users`

**Requirements**:
- Fetch users from API
- Show loading and fetch-error states
- Text input to search users by name (case-insensitive filter)
- Render card per user with name, email, city, company

**UI**:
```
User Directory

[ Search by name.... ]

┌─────────────────────────────┐
│ Leanne Graham               │
│ leanne@...                  │
│ Gwenborough                 │
│ Romaguera-Crona             │
└─────────────────────────────┘
```

**Look and feel**: Plain stacked cards, thin borders, TypeScript with explicit interfaces

---

### 4. File Explorer — 45 min

**Folder**: `file-explorer/`

**API**: GitHub Contents API (`facebook/react` root)

**Requirements**:
- Fetch root contents from GitHub API
- Render directories before files
- Show folder emoji (📁 closed, 📂 open)
- Lazy load folder contents only on first expansion
- Support recursive nested folder rendering
- Toggle folder open/closed on click
- Show generic error fallback if fetch fails

**UI**:
```
📁 .github
📁 fixtures
📁 packages
  📂 react
    README.md
    package.json
README.md
LICENSE
```

**Look and feel**: Plain tree view, folders as buttons, nested contents indented

---

### 5. Flashcard Quiz — 45 min

**Folder**: `flip-card/`

**API**: Open Trivia DB (`https://opentdb.com/api.php?amount=10`)

**Requirements**:
- Fetch 10 multiple-choice trivia questions
- Render one flashcard at a time
- Show question on front, correct answer on back
- Flip card on click using 3D rotate animation (rotateY, backface-visibility, perspective)
- Prev/Next navigation buttons
- Reset card to front when moving between questions
- Show current question index out of total
- Show loading and error states

**UI**:
```
    [Prev]   ┌──────────────────────┐   [Next]
             │ Trivia question text │
             │  click to flip       │
             └──────────────────────┘
                  3 / 10
```

**Look and feel**: Centered card with 3D flip, neutral front, gray back

---

### 6. Infinite Scroll — 35 min

**Folder**: `infinte-scroll/`

**API**: `https://dummyjson.com/products?limit=10&skip=`

**Requirements**:
- Fetch products 10 at a time using offset
- Append fetched products to existing list
- Render thumbnail, title, price for each product
- Show "Loading....." while fetching next batch
- Show generic error state if request fails
- Trigger next batch from "Load more" button (or IntersectionObserver for interview version)

**UI**:
```
[thumbnail]
Product title
$999

        [ Load more ]
```

**Look and feel**: Raw vertical list, no card shell

---

### 7. CSS User Directory (Flip Cards) — 60 min

**Folder**: `user-card/`

**API**: `https://jsonplaceholder.typicode.com/users`

**Requirements**:
- Fetch users from API
- Search input to filter by name
- Responsive grid of profile cards
- Avatar from `https://i.pravatar.cc/150?img=`
- Front: name, username, verified badge, bio, email, phone, website
- "Learn More" flips to back
- Back: company name, catch phrase, address, OpenStreetMap iframe
- "Go Back" flips to front

**UI**:
```
[ search for user..... ]

┌──────────────────────────────┐
│    (avatar circle)           │
│    Leanne Graham             │
│    Bret | Verified           │
│ ---------------------------  │
│ Bio: lorem ipsum...          │
│ Email: ...                   │
│ [ Learn More ]               │
└──────────────────────────────┘

flip →

┌──────────────────────────────┐
│ Company: ...                 │
│ Address: ...                 │
│ [ embedded map ]             │
│ [ Go Back ]                  │
└──────────────────────────────┘
```

**Look and feel**: Dark cards, orange buttons, orange avatar ring, polished 3D flip

---

### 8. Rick & Morty Characters — 50 min

**Folder**: `rick-morty/`

**API**: `https://rickandmortyapi.com/api/character`

**Requirements**:
- Fetch characters from API
- Show loading and error states
- Search by name
- Filter by status: All, Alive, Dead, unknown
- Sort by name (asc/desc)
- Show "No Characters found" when filters remove all
- Render image, name, status, species in grid

**UI**:
```
Rick And Morty Characters

[Search...] [All ▼] [Sort A-Z ▼]

┌──────────┐  ┌──────────┐
│  image   │  │  image   │
│ Rick     │  │ Morty    │
│ Alive    │  │ Alive    │
│ Human    │  │ Human    │
└──────────┘  └──────────┘
```

**Look and feel**: Simple controls row, compact cards, dense responsive grid

---

### 9. Product Cart with Discounts — 60 min

**Folder**: `product-cart/`

**Requirements**:
- Seed cart with initial products
- Add new product (name, price, quantity, description)
- Auto-generate next product ID
- Increase/decrease quantity per product (min 1)
- Remove any product
- Show per-item subtotal
- Coupon code "GRAB50" applies 50% discount
- Show coupon success message
- Compute subtotal, discount, final total
- Reject invalid coupon with alert

**UI**:
```
Shopping Cart

┌ Add New Product ─────────────┐
│ Name Price Qty Desc [Add]   │
└──────────────────────────────┘

┌──────────── Cart Item ───────┐
│ Shampoo                      │
│ Price: 200                   │
│ Qty: [ - ] [ 1 ] [ + ]       │
│ Subtotal: 200.00             │
│                   [Remove]   │
└──────────────────────────────┘

┌ Summary ─────────────────────┐
│ Coupon: [GRAB50...] [Apply]  │
│ Subtotal: ...                │
│ Discount: ...                │
│ Total: ...                   │
└──────────────────────────────┘
```

**Look and feel**: Form panel (pale yellow), gray cart cards, separate summary block

---

### 10. Tabs Component — 30 min

**Folder**: `tab-component/`

**Requirements**:
- Render four tabs from static data
- Track selected tab by stable ID
- Highlight active tab
- Show text content for selected tab below nav
- Update selected tab on click

**UI**:
```
┌────────┬────────┬────────┬────────┐
│ Tab 1  │ Tab 2  │ Tab 3  │ Tab 4  │
└────────┴────────┴────────┴────────┘

Tab 2 text
```

**Look and feel**: Full-width tab buttons, gray page, active tab blue with white text

---

### 11. Toast Notification System — 45 min

**Folder**: `toast-notification/`

**Requirements**:
- Buttons to trigger success, warning, info, error toasts
- Custom `useToast` hook for centralized state
- Prepend new toasts (newest first)
- Limit visible toasts to 4
- Map each type to fixed message string
- "Clear all toasts" button
- Render toast stack in top-right corner

**Implementation note**: Current source version does not have auto-dismiss timers or per-toast close buttons (simpler than interview version)

**UI**:
```
[Success] [Warning] [Info] [Error] [Clear all]

                    ┌──────────────────┐
                    │ Success message  │
                    └──────────────────┘
                    ┌──────────────────┐
                    │ Warning message  │
                    └──────────────────┘
```

**Look and feel**: Trigger buttons centered, toast stack pinned top-right, type color on background

---

### 12. Reddit-Style Comments — 60 min

**Folder**: `reddit-style-comments/`

**Requirements**:
- Seed with Reddit-style threaded comments
- Render author, relative timestamp, text, vote count
- Collapse/expand any comment thread
- Show hidden reply count when collapsed
- Upvote/downvote any comment recursively
- Show "Reply" toggle per comment
- Show "Edit" and "Delete" only for comments by "alice"
- Nested replies with indentation and thread lines
- Reply textarea with "Post reply" and "Cancel"

**UI**:
```
💬 Comments
Logged in as alice

[-] bob · 1 hrs ago
Great post!
🔼 12 🔽  Reply
  [-] alice · 30 mins ago
  Thanks Bob!
  🔼 3 🔽  Reply Edit Delete
```

**Look and feel**: Boxed comments, vertical thread lines, blue action buttons, red destructive

---

### 13. E-Commerce Cart Flow (In Progress) — 110 min

**Folder**: `e-commerce-cart/`

**API**: `https://dummyjson.com/products?limit=12&skip=`

**Requirements**:
- Fetch products with pagination (12/page)
- Responsive grid of product cards
- Show: image, title, description (trimmed), rating stars, reviews, discount %, price, stock, original MRP, shipping
- Stock-aware CTA via `AddToCartButton` component
- Button states: "Add to cart", "Limited stock available", "Out of stock"
- After add, swap to quantity stepper (-, qty, +)
- Header with title and cart icon
- "Next" button for incremental pages
- Merge products into state (preserve earlier pages)
- Handle loading, error, retry
- SVG partial-fill star rating with gradients and `useId`

**UI**:
```
        E-commerce website      [cart]

┌──────────────────────┐
│  product image       │
│ Title                │
│ Short desc...        │
│ ★★★★☆  24 reviews    │
│ -12%   $49   18      │
│ MRP: $55             │
│ Free shipping        │
│ [ Add to cart ]      │
└──────────────────────┘

        [ Next ]
```

**Look and feel**: Gray page, light image panel, orange buttons, detailed pricing/rating group

---

### 14. Multi-Field Form Validation (In Progress) — 45 min

**Folder**: `input-form/`

**Requirements**:
- Form fields: name, email, phone
- Track form values in state
- Validate on blur and on submit
- Name validation: required, min 3 chars, letters only
- Collect field-level errors in `errors` object
- On success, show submitted view with name
- "Submit another" resets form
- Commented placeholders for position, cover letter, date, terms

**UI**:
```
Enter your name:
[ Enter your name ]
Name error text

Enter your email:
[ enter your email ]

Enter your phone:
[ Enter your phone number ]

[ Submit ]
```

**Look and feel**: Plain vertical form, 16px gaps, minimal styling, structure-first

---

### 15. Simple Form — 25 min

**Folder**: `simple-input-form/`

**Requirements**:
- Reusable `InputField` for name and email
- `Dropdown` component with 5 static options
- Textarea for message
- Track whole form in one `formData` object
- Submit and log values to console
- Responsive: row to column at small widths

**UI**:
```
[ Name ] [ Email ]
[ option1 ▼ ]
[ textarea....... ]
[ Submit ]
```

**Look and feel**: Vertically centered, name/email side by side, light form scaffolding

---

### 16. Drag and Drop Kanban (Partial) — 60 min

**Folder**: `drag-and-drop-kanban/`

**Requirements**:
- Render 6 lanes: S, A, B, C, D, E
- Seed lane S with 2 existing items
- Separate source strip with draggable items 1-10
- Show items as square draggable blocks
- Empty droppable content areas for lanes

**Implementation note**: Current source is layout and `draggable` start only. Drop handlers, lane state updates, reorder not implemented yet.

**UI**:
```
S [ 10 ][ 20 ]
A [            ]
B [            ]

[1] [2] [3] [4] [5] [6] [7] [8] [9] [10]
```

**Look and feel**: Full-height centered, wide bordered lanes, square source tokens

---

### 17. Nested Data Table with Sorting (In Progress) — 50 min

**Folder**: `data-table-with-sorting/`

**API**: `https://randomuser.me/api/?results=20`

**Requirements**:
- Fetch 20 users
- Define nested TypeScript models (name, location, coordinates, timezone, login)
- Flatten nested objects with recursive `flattenDeepNest` helper
- Store flattened rows separately from raw API rows
- Render table with columns: Name, City, Country, Postcode, State, Street, Timezone
- Build row keys from `login.username`

**Implementation note**: Table rendering complete, but sort state, header click handlers, asc/desc indicators not implemented in saved source.

**UI**:
```
┌──────────────────────────────────────────────┐
│ Name | City | Country | Postcode | State... │
├──────────────────────────────────────────────┤
│ Mrs Rosa Sanders | Palmdale | US | ...      │
└──────────────────────────────────────────────┘
```

**Look and feel**: Bare table-first, focused on nested data flattening before styling

---

### 18. Star Rating (Partial) — 30 min

**Folder**: `star-rating/`

**Requirements**:
- Accept `starCount` prop
- Render repeated SVG star icons from count

**Implementation note**: Saved file incomplete, loop uses wrong variable name, return truncated. No hover variant folder in repo snapshot.

**Intended UI**:
```
★ ★ ★ ★ ☆
```

**Look and feel**: Small icon row component (source not complete enough to promote to finished)

---

### Components Recovered From Progress Log Only (No Source Folder)

#### Progress Bar — 25 min

**Requirements** (reconstructed from progress log):
- Track progress value in state
- Clamp progress to valid bounds
- Update bar visually as value changes
- Conditional styling and inline width for fill
- Animate width changes with CSS transitions

**UI**:
```
Progress

┌──────────────────────────────┐
│███████████████░░░░░░░░░░░░░░│  45%
└──────────────────────────────┘

[ -10 ] [ +10 ]
```

---

#### Todo App — 25 min

**Requirements** (reconstructed from progress log):
- Controlled input for entering todo
- Add new todos into array state
- Render list from state
- Delete item from list
- Array spread, map, splice operations
- Basic version, no edit functionality

**UI**:
```
[ Enter a task ] [ Add ]

- Buy milk              [Delete]
- Finish prep notes     [Delete]
```

---

#### Star Rating Widget — 30 min

**Requirements** (reconstructed from progress log):
- Configurable number of stars
- Track selected rating in state
- Click star to set rating
- Highlight selected stars up to current rating
- Support reset flow
- Build stars via loops/mapped rendering

---

#### Star Rating (Hover + Props) — 30 min

**Requirements** (reconstructed from progress log):
- Accept rating prop and configurable max
- Hover-preview separate from selected state
- On hover, preview hovered value
- On mouse leave, revert to selected
- Support reusable independent instances
- Sync internal display with incoming prop updates
- Handle 0 correctly with nullish-safe display logic

---

### ⏳ Queued — Additional New Questions (26 questions with full specs)

#### 1. Recursive File Explorer (Lazy) — 60 min

**Tech**: fetch (GitHub API), recursion, lazy loading, per-node state, TypeScript  
**Requirements**:

- Render file tree from GitHub repo
- Click to expand/collapse folders
- Lazy load folder contents on click
- Show loading state per folder
- Icons for files vs folders
- Sorting (alphabetical)

**UI**:

```
📂 repository
  📁 src
    📄 index.ts
    📄 utils.ts
  📁 dist
    [expand to load...]
  📄 README.md
```

---

#### 2. Toast Notification System — 45 min

**Tech**: useState, useEffect, setTimeout, CSS positioning  
**Requirements**:

- Toast appears at fixed position (bottom-right)
- Multiple toasts stack vertically
- Auto-dismiss after 3 seconds
- Close button (X) for manual dismiss
- Types: success (green), error (red), warning (yellow), info (blue)
- Provide hook to trigger toasts

**UI**:

```
┌──────────────────┐
│ ✓ Success        │X│
├──────────────────┤
│ ✗ Error          │X│
├──────────────────┤
│ ⚠ Warning        │X│
└──────────────────┘
```

---

#### 3. Lottery Spinner / Wheel — 50 min

**Tech**: CSS transform rotate, random number generation, animations  
**Requirements**:

- Rotating wheel with 16 sections
- Click button to spin
- Random stop position
- Smooth animation (2-3 sec)
- Display result after stop
- Each section has value (50, 100, 200, etc.)
- Pointer at top to indicate selected section

**UI**: (See earlier wireframe with 16 colored wedges)

---

#### 4. Autocomplete / Typeahead — 40 min

**Tech**: useState, useEffect, debounce, keyboard navigation  
**Requirements**:

- Input field with suggestions dropdown
- Fetch suggestions on each keystroke (debounce 300ms)
- Highlight matching text
- Arrow key navigation (up/down)
- Enter to select
- Escape to close dropdown
- Show "no results" state

**UI**:

```
[Search input]
├─ Option 1 (highlight match)
├─ Option 2
└─ Option 3
```

---

#### 5. Multi-Level Category Filter — 35 min

**Tech**: useState, tree data structure, recursive components  
**Requirements**:

- Nested category structure
- Click to expand/collapse
- Checkbox to select category
- Child categories auto-check when parent checked
- Parent auto-check if all children checked
- Show product count per category
- Filter results based on selected

**UI**:

```
☐ Electronics (24)
  ☑ Phones (10)
    ☑ Android (6)
    ☐ iOS (4)
  ☐ Laptops (14)
    ☐ Windows (8)
    ☐ Mac (6)
```

---

#### 6. Countries App — 50 min

**Tech**: fetch (REST Countries API), client-side filtering  
**Requirements**:

- Display all countries in grid
- Search by name
- Filter by region
- Sort by name/population
- Card shows: flag, name, capital, population
- Click card for details view
- Responsive grid

**UI**:

```
[Search] [Region ▼] [Sort ▼]

[Flag] India        [Flag] Brazil      [Flag] Canada
Capital: Delhi      Capital: Brasilia  Capital: Ottawa
Pop: 1.4B           Pop: 215M          Pop: 39M
```

---

#### 7. Calculator — 30 min

**Tech**: useState, operator precedence, string parsing  
**Requirements**:

- Basic arithmetic (+, -, \*, /)
- Decimal support
- Clear and delete buttons
- Display current input and result
- Keyboard support (0-9, +, -, \*, /, Enter, Backspace)
- Handle edge cases (division by zero)

**UI**:

```
┌─────────────────┐
│     0           │
├─────────────────┤
│ 7 8 9 /         │
│ 4 5 6 *         │
│ 1 2 3 -         │
│ 0 . = +         │
│   CLR DEL       │
└─────────────────┘
```

---

#### 8. Modal / Popup — 25 min

**Tech**: useState, React Portal (or fixed positioning)  
**Requirements**:

- Open/close modal on button click
- Overlay (semi-transparent background)
- Close on X button, Escape key, or overlay click
- Prevent body scroll when modal open
- Smooth fade-in/fade-out animation
- Focus trap (optional bonus)

**UI**:

```
[Background overlay]
    ┌─────────────────────┐
    │ Modal Title       X │
    │                     │
    │ Modal content...    │
    │                     │
    │ [Cancel] [OK]       │
    └─────────────────────┘
```

---

#### 9. Accordion / Collapsible — 30 min

**Tech**: useState, controlled collapse state  
**Requirements**:

- Multiple sections, each with header and content
- Click header to expand/collapse
- Only one section open at a time (optional: allow multiple)
- Smooth transition animation
- Icons indicating state (▼ / ▶)
- Support nested accordions

**UI**:

```
▼ Section 1
  Content for section 1 visible...
▶ Section 2
  [hidden]
▶ Section 3
  [hidden]
```

---

#### 10. Pagination — 35 min

**Tech**: useState, array slicing, button states  
**Requirements**:

- Display items with pagination
- Previous/Next buttons
- Page number buttons (1, 2, 3, ...)
- Disable Previous on first page, Next on last page
- Show "Page X of Y" info
- Items per page customizable

**UI**:

```
Item 1, Item 2, ... Item 10

[◀ Prev] [1] [2] [3] [4] [5] [Next ▶]
Page 1 of 15 (150 items total)
```

---

#### 11. Image Carousel / Slider — 40 min

**Tech**: useState, setInterval, CSS transitions  
**Requirements**:

- Display one image at a time
- Prev/Next buttons
- Auto-advance every 5 seconds
- Pause on hover
- Dot indicators (active dot highlighted)
- Click dot to jump to slide
- Keyboard arrow keys support

**UI**:

```
  ◀ [Image Display] ▶

  ● ○ ○ ○ ○

  Slide 1 / 5
```

---

#### 12. Drag and Drop — 60 min

**Tech**: useRef, onDragStart/onDragOver/onDrop, state updates  
**Requirements**:

- Draggable items in source list
- Droppable target area
- Visual feedback during drag (highlight, preview)
- Reorder items by dragging
- Support multiple drops/reordering
- Visual ghost image

**UI**:

```
[Source Items]      [Drop Zone]
- Item A     ──┐
- Item B      ├──> - Item C
- Item C     ──┘    - Item A
- Item D          (Item B hovering)
```

---

#### 13. Multi-step Form Wizard — 50 min

**Tech**: useState, form validation, step tracking  
**Requirements**:

- Multiple form steps (3-5)
- Previous/Next/Submit buttons
- Validate before moving to next step
- Show step indicator (1/5)
- Persist data across steps
- Show summary on final step
- Confirmation/submission

**UI**:

```
Step 1: Personal Info
[Name] [Email]
     [Next ▶]

Step Indicator: 1 / 3
Progress bar: ████░░
```

---

#### 14. File Upload with Preview — 40 min

**Tech**: input[type="file"], FileReader, drag-and-drop  
**Requirements**:

- Click to upload or drag-and-drop
- Show file preview (image/icon)
- File info (name, size, type)
- Progress bar during upload
- Remove file button
- Multiple file support (optional)

**UI**:

```
┌─────────────────────────┐
│  📁 Drop files here     │
│      or click           │
│   [Choose File]         │
└─────────────────────────┘
[thumbnail] file.jpg 2.3MB [X]
[Progress: ████░░░░░░] 40%
```

---

#### 15. Dynamic Form Fields (add/remove) — 35 min

**Tech**: useState, map array of fields, controlled inputs  
**Requirements**:

- Add new field dynamically
- Remove specific field
- Each field has name, email, etc.
- Validate all fields
- Show + button to add, X to remove per field
- Preserve order

**UI**:

```
Name: [input] [X]
Email: [input] [X]
[+ Add Field]
[Submit]
```

---

#### 16. Tabs with Routing — 45 min

**Tech**: useState or URL params, conditional rendering  
**Requirements**:

- Multiple tabs (Home, Profile, Settings)
- Click tab to switch content
- Active tab highlighted
- URL changes with tab selection
- Back button navigates tabs
- Lazy load tab content (optional)

**UI**:

```
[Home] [Profile] [Settings]
    ↓ active
Content for Home tab...
```

---

#### 17. Data Table (sort + filter) — 50 min

**Tech**: useState, array sorting/filtering, controlled inputs  
**Requirements**:

- Table with rows and columns
- Click header to sort (asc/desc)
- Search/filter by name, email, etc.
- Show sort indicator (↑/↓)
- Pagination support
- Responsive (horizontal scroll on mobile)

**UI**:

```
[Search: ____]

Name ↑    Email             Status
─────────────────────────────────
John      john@ex.com       Active
Jane      jane@ex.com       Inactive
```

---

#### 18. Breadcrumbs Navigation — 25 min

**Tech**: useLocation (React Router) or custom context  
**Requirements**:

- Show navigation path (Home > Products > Electronics)
- Click to navigate
- Current page not clickable
- Separator between items (/)
- Responsive (show ... on mobile)

**UI**:

```
Home / Products / Electronics / Phones
     ↑                               ↑
    click                      current (no link)
```

---

#### 19. Virtual List / Windowing — 60 min

**Tech**: useEffect, useRef, scroll event listeners, DOM measurement  
**Requirements**:

- Render 10,000+ items efficiently
- Only visible items in DOM (dynamic window)
- Smooth scrolling with placeholder heights
- Calculate viewport height and scroll position
- Maintain scroll position on remount
- Support variable item heights
- Keyboard navigation (arrow keys)

**UI**:

```
┌─────────────────────────┐
│ Item 247                │  ← visible window
│ Item 248                │  → ~15-20 items rendered
│ Item 249                │
│ Item 250                │
│ ...                     │
│ Item 262                │
│ [scrollbar]             │
└─────────────────────────┘
10,000 items total (only ~20 in DOM)
```

**Edge cases**:

- Jump to item (search find)
- Scroll to top
- Variable heights (with key)

---

#### 20. Image Gallery with Lightbox — 50 min

**Tech**: useState, keyboard events, CSS overlay  
**Requirements**:

- Grid of thumbnail images
- Click thumbnail to open fullscreen lightbox
- Navigation: prev/next buttons
- Keyboard: arrow keys to navigate, Esc to close
- Dot indicators showing current slide
- Image counter (3 / 12)
- Smooth transitions

**UI**:

```
[Grid of 9 thumbnails]
         ↓ click
┌────────────────────────┐
│   [◀] [Large Image] [▶]│
│   Slide 3 of 12        │
│   ● ○ ○ ○ ○ ○ ○ ○ ○ ○│
│              [X]       │
└────────────────────────┘
```

---

#### 21. Debounce & Throttle Implementation + Usage — 45 min

**Tech**: useCallback, useRef, custom hooks  
**Requirements**:

- Create custom useDebounce hook
- Create custom useThrottle hook
- Demonstrate both (search input vs scroll listener)
- Show timing differences
- Handle cleanup on unmount
- Trailing/leading edge options

**Examples**:

- Debounce: Search input (300ms delay before API call)
- Throttle: Scroll listener (fire at most every 100ms)

**UI**:

```
Search: [input field]
Results: 0 (waiting 300ms...)

Scroll listener: throttled every 100ms
Scroll count: 1200 (raw), 12 (throttled)
```

---

#### 22. Tic-Tac-Toe Game — 55 min

**Tech**: useState, game logic, win detection  
**Requirements**:

- 3x3 grid
- X vs O (human vs AI or two-player)
- Track move history
- Detect win/draw
- Reset game
- Show current player
- AI (minimax or random)

**UI**:

```
X vs O

[X] [ ] [ ]
[ ] [O] [ ]
[ ] [ ] [ ]

X turn
Status: Playing | [Reset]
Move history: X(0,0) O(1,1) ...
```

---

#### 23. Color Picker — 35 min

**Tech**: canvas, mouse events, HSL/RGB conversion  
**Requirements**:

- Display gradient area (hue × saturation)
- Slider for brightness/lightness
- Show current color swatch
- Input hex code or RGB
- Copy to clipboard
- Eyedropper-style selection

**UI**:

```
┌─────────────────────┐
│ [Hue Gradient Area] │ ← click to select
│ [Brightness Slider] │
│ ■ (current color)   │
│ Hex: #FF5733 [Copy] │
│ RGB: 255, 87, 51    │
└─────────────────────┘
```

---

#### 24. Countdown Timer — 30 min

**Tech**: useState, setInterval, time formatting  
**Requirements**:

- Input time in minutes/seconds
- Start/Pause/Reset buttons
- Display MM:SS format
- Visual progress (circle or bar)
- Sound/notification on end
- Keyboard shortcuts (space to toggle)

**UI**:

```
Time: [05] : [30]

      ◯ 05:30 ◯
    (circular progress)

[Start] [Pause] [Reset]
```

---

#### 25. Chat Message List — 40 min

**Tech**: useState, useEffect, auto-scroll, filtering  
**Requirements**:

- Display messages (left=received, right=sent)
- Auto-scroll to latest
- Timestamp per message
- User avatar
- Message grouping by time
- Typing indicator
- Unread count

**UI**:

```
┌──────────────────────────┐
│ Messages (12 unread)     │
├──────────────────────────┤
│ 👤 User: Hello     2:30pm│
│        You: Hi there! 2:31│
│ 👤 User: How are you?   │
│        ... typing ...    │
│                   [Input]│
└──────────────────────────┘
```

---

#### 26. Nested Data Table with Sorting — 50 min

**Tech**: fetch, useEffect, useState, data transformation, array sorting  
**Requirements**:

- Fetch nested JSON from API (e.g., users with nested posts/comments)
- Flatten/transform nested data into table rows
- Display in sortable table
- Click column header to toggle sort (asc/desc)
- Sort indicator on active column (▲ asc, ▼ desc)
- Show sort state visually (highlight header)
- Handle multiple data types (strings, numbers, dates)
- Show loading state while fetching
- Handle empty data

**Sample Data Structure** (from API):

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "company": {
        "name": "Acme Corp",
        "industry": "Tech"
      },
      "posts": [
        {
          "id": 101,
          "title": "First Post",
          "likes": 42
        },
        {
          "id": 102,
          "title": "Second Post",
          "likes": 18
        }
      ]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "company": {
        "name": "TechStart",
        "industry": "AI"
      },
      "posts": [
        {
          "id": 201,
          "title": "React Tips",
          "likes": 156
        }
      ]
    }
  ]
}
```

**Table Display** (flattened):

```
Name ▼      Email              Company         Post Count ▲   Total Likes
──────────────────────────────────────────────────────────────────────────
Jane Smith  jane@example.com   TechStart       1              156
John Doe    john@example.com   Acme Corp       2              60
```

**Behavior**:

1. Fetch data on component mount
2. Transform nested data: flatten user.posts array into row-level aggregations (post count, total likes)
3. Display in table with columns: Name, Email, Company, Post Count, Total Likes
4. Click column header to sort
5. Toggle between asc/desc on repeated clicks
6. Show visual indicator (▲ ▼) on active sort column
7. Maintain sort state as user interacts

**Bonus (if time permits)**:

- Multi-column sort (Shift+Click)
- Search/filter by name
- Pagination support
- Export to CSV
- Custom sort functions for different data types

---

---

## 🌐 15 Essential Frontend Architecture & Performance Concepts (Interview Mastery)

> Deep conceptual mastery required for Senior Frontend & System Design rounds.

### 01. The Critical Rendering Path (CRP)
- **Sequence**: HTML Parsing (DOM Tree) + CSS Parsing (CSSOM Tree) → Render Tree (visible elements) → Layout / Reflow (geometry & positions) → Paint / Rasterize (pixels & colors) → Composite (GPU layer blending).
- **Render-Blocking Resources**: Synchronous `<script>` tags block DOM construction; `<link rel="stylesheet">` blocks rendering until CSSOM is ready.
- **Optimization Strategy**: Minify & compress resources, async/defer non-critical scripts, inline critical CSS, prioritize viewport resources with `<link rel="preload">` and `preconnect`.

### 02. The Core Web Vitals (CWV)
- **LCP (Largest Contentful Paint, < 2.5s)**: Measures perceived load speed of main above-the-fold content. Optimization: Fast TTFB, CDN edge caching, optimized image formats (WebP/AVIF), `fetchpriority="high"` on hero images.
- **INP (Interaction to Next Paint, < 200ms)**: Measures overall page responsiveness to user clicks/keys (replaces FID). Optimization: Break up long tasks (>50ms) using `scheduler.yield()` or `requestAnimationFrame`, offload heavy computation to Web Workers.
- **CLS (Cumulative Layout Shift, < 0.1)**: Measures visual stability. Optimization: Always set explicit `width`/`height` or `aspect-ratio` on images/videos, avoid inserting dynamic content above existing content without reserving space, use `font-display: swap` with size-matched fallback font metrics.

### 03. HTTP Caching
- **Cache-Control Directives**:
  - `public` vs `private` (CDN edge vs browser-only).
  - `max-age=N` (TTL in seconds) vs `s-maxage=N` (shared CDN cache TTL).
  - `no-cache` (must revalidate with server before using) vs `no-store` (never store in any cache).
  - `must-revalidate` (stale content cannot be used without validation) vs `immutable` (file never changes, bypasses revalidation).
  - `stale-while-revalidate=N` (serve stale content instantly while revalidating in background).
- **Revalidation Mechanisms**:
  - Strong: `ETag` (hash of content) with `If-None-Match` → returns `304 Not Modified`.
  - Weak: `Last-Modified` with `If-Modified-Since`.
- **Production Asset Strategy**: Hashed static assets (`bundle.a8f9c.js`) with `Cache-Control: public, max-age=31536000, immutable`; HTML files with `Cache-Control: no-cache`.

### 04. Content Negotiation
- **Mechanism**: Client sends request headers specifying capabilities/preferences; server responds with best representation using `Vary` header.
- **Headers**:
  - `Accept`: MIME types (`image/avif,image/webp,*/*`).
  - `Accept-Encoding`: Compression algorithms (`gzip`, `br` / Brotli, `zstd`).
  - `Accept-Language`: Localization preferences (`en-US,en;q=0.9,hi;q=0.8`).
- **Server Response**: `Content-Type`, `Content-Encoding`, `Vary: Accept-Encoding, Accept`.

### 05. Lazy Loading
- **Components**: `React.lazy(() => import('./HeavyModal'))` combined with `<Suspense fallback={<Skeleton />}>`.
- **Native Media**: `<img src="..." loading="lazy" decoding="async" />`.
- **IntersectionObserver API**: Triggering data fetches or rendering when a sentinel element enters the viewport.
- **On-Demand Interaction**: Deferring heavy libraries (e.g. Monaco Editor, Chart.js) until the user actually clicks the relevant tab/button.

### 06. Bundle Splitting & Tree Shaking
- **Code Splitting Strategies**:
  - *Route-based*: Each page gets its own chunk (`/dashboard.js`, `/settings.js`).
  - *Vendor-based*: Split node_modules into long-term cached vendor chunks.
  - *Component/Dynamic*: Split conditional or rare sub-trees.
- **Tree Shaking**:
  - Dead-code elimination relying on static ESM (`import`/`export`).
  - `package.json` `"sideEffects": false` or specific file globs.
  - Avoiding CJS (`require`), barrel file re-export pitfalls, and mutations on imported modules.

### 07. Critical CSS
- **Concept**: The minimal set of CSS required to render the above-the-fold content of a page.
- **Implementation**: Inlined directly into a `<style>` block in `<head>` to prevent render-blocking stylesheet network roundtrips.
- **Asynchronous Rest**: Remaining stylesheets loaded asynchronously using `<link rel="preload" as="style" onload="this.rel='stylesheet'">`.

### 08. Essential State vs Derived State
- **Single Source of Truth**: Keep the stored state minimal. If a value can be computed from existing state or props, calculate it dynamically on the fly during render.
- **Antipattern**: Syncing props to state or duplicating state inside `useEffect` (leads to stale values, out-of-sync bugs, and extra render cycles).
- **Rule**: Store raw items and filter keyword; compute `filteredItems = items.filter(...)` or `useMemo(() => ..., [items, filter])`.

### 09. The Reducer Pattern
- **Concept**: Managing complex, multi-field, or interdependent state transitions through a pure function: `(state, action) => newState`.
- **Advantages**:
  - Centralizes and documents all possible state transitions.
  - Eliminates impossible states and race-condition intermediate states.
  - Highly testable with zero mock dependencies.
- **Usage**: React `useReducer`, Redux Toolkit `createSlice`, Zustand actions.

### 10. Windowing (List Virtualization)
- **Mechanism**: Rendering only the slice of list items currently visible within the container viewport (+ small buffer overscan), instead of mounting thousands of DOM nodes.
- **Libraries**: TanStack Virtual (`useVirtualizer`), `react-window`, `react-virtualized`.
- **Engineering Challenges**:
  - Handling variable/dynamic row heights with measurement caches (`measureElement`).
  - Scroll position restoration during window resize or navigation.
  - Accessibility: Managing keyboard focus navigation and providing `aria-rowcount`/`aria-rowindex`.

### 11. Server-Side Rendering (SSR)
- **Concept**: Generating complete HTML for a page on the server per request (via Node.js/Edge runtime) before streaming it to the client.
- **Pros**: Fast First Contentful Paint (FCP), optimal SEO, social crawlers get full meta tags.
- **Cons**: Slower Time to First Byte (TTFB) compared to static CDN, higher server compute overhead, requires client hydration before interactivity.

### 12. Rehydration (Client-Side Hydration)
- **Concept**: The process where client-side React parses the server-rendered HTML DOM, builds the internal Fiber tree, and attaches event listeners.
- **Hydration Mismatch Causes**:
  - Non-deterministic values (e.g. `Date.now()`, `Math.random()`).
  - Accessing browser-only globals during SSR (`window.innerWidth`, `localStorage`).
  - Invalid HTML nesting (e.g. `<p>` inside `<p>`, `<div>` inside `<p>`).
- **Selective / Progressive Hydration**: React 18 `<Suspense>` streams HTML chunks and hydrates interactive islands independently without blocking the entire page.

### 13. Partial Pre-rendering (PPR)
- **Concept**: Next.js hybrid rendering model combining the speed of static edge caching with the freshness of dynamic server streaming in a single HTTP response.
- **How it works**: The static shell (layout, navigation, fallback skeletons) is pre-rendered at build time and served immediately from edge CDN; dynamic holes wrapped in `<Suspense>` are streamed from the server as promises resolve.

### 14. React Server Components (RSC)
- **Concept**: Components that execute strictly on the server and never ship JavaScript to the client bundle.
- **RSC vs SSR**:
  - SSR sends raw HTML string + client JS bundle to hydrate.
  - RSC renders to a serialized JSON wire format (virtual DOM representation), allowing direct database/filesystem access with zero client bundle cost.
- **Client Components (`'use client'`)**: Mark the boundary where client interactivity, state (`useState`), and browser event listeners begin.

### 15. Micro Frontends
- **Concept**: Architectural pattern decomposing monolithic frontend applications into autonomous, independently developed, tested, and deployed sub-applications.
- **Implementation Strategies**:
  - **Module Federation (Webpack 5 / Vite)**: Dynamic runtime sharing of components and dependencies across distinct builds.
  - **Web Components**: Framework-agnostic custom elements with shadow DOM isolation.
  - **Iframe Sandboxing / Edge Routing**: Complete isolation per domain route.
- **Trade-offs**: Autonomy and team scaling vs dependency duplication, CSS leakage, routing desynchronization, and complex cross-app state sharing.

---

## 🎯 Tuebora Mock Interview Question Bank (7 Domains)

> Designed for Tuebora Senior Frontend / Full-Stack Interview Drill.  
> Practice guideline: Answer each question aloud in ~2 minutes with structure: **Concept / Thesis → Architectural Trade-off → Concrete Production Example**.

---

### Domain 1: React & JS Core (5 Questions)

1. **Walk through what happens from setState to the DOM update. When does React bail out of a re-render?**
   - *Key Points*: Fiber reconciliation, render phase (pure, async in Concurrent React) vs commit phase (synchronous DOM mutations).
   - *Bailout conditions*: `Object.is(prevState, newState)` shallow equality, component bailout via `React.memo` (props unchanged), or parent re-rendering without children props changing.
   - *Interview Punchline*: Explain why updating state with the exact same primitive skips render phase, while object mutation fails bailout checks.

2. **When is useEffect the wrong tool? Give an example you fixed.**
   - *Key Points*: Deriving state from props/state, transforming data for rendering, handling user click events inside effects vs event handlers, resetting state on prop change (prefer keys).
   - *Production Example*: Converting a redundant `useEffect` that synced search filter to filtered list into a pure inline `useMemo` / derived calculation.

3. **How do stale closures arise in hooks, and how do you fix them?**
   - *Key Points*: Lexical environment captured at render time in callbacks, `setTimeout`, `setInterval`, or event listeners with empty/incomplete dependency arrays.
   - *Fixes*: Functional state updates `setCount(prev => prev + 1)`, mutable refs `useRef` for latest value capture, or exhaustive dependency array (`useEffectEvent` in React 19).

4. **When do useMemo, useCallback, and React.memo help, and when do they hurt? How do you find the real cause of a slow render?**
   - *Key Points*: Memoization cost vs re-computation cost. `useCallback` only saves child re-renders when child is wrapped in `React.memo` or used in dependency arrays.
   - *Diagnostics*: React DevTools Profiler (Flamegraph, "Why did this render?"), `useWhyDidYouUpdate` custom hook, Chrome Performance panel.

5. **Would you use useTransition or useDeferredValue on a filter input? Why?**
   - *Key Points*: `useTransition` when you control the state update function (`startTransition(() => setFilter(val))`), `useDeferredValue` when you receive a value as a prop from an external source or component you don't own.
   - *Trade-offs*: Keeping the text input responsive at 60 FPS while deferring expensive list/table re-rendering in the background.

---

### Domain 2: State & Data Management (3 Questions)

6. **Redux Toolkit vs Context vs TanStack Query: what goes where in an enterprise app?**
   - *Key Points*:
     - **Server State** (caching, deduplication, invalidation, pagination, polling) → **TanStack Query / SWR**.
     - **Complex Global Client State** (undo/redo, multi-step workflows, canvas, offline mutations) → **Redux Toolkit / Zustand**.
     - **Low-Frequency Ambient State** (theming, locale, authenticated user profile) → **React Context**.
   - *Pitfall*: Storing server API responses in Redux store leads to manual cache invalidation nightmares.

7. **Design cache invalidation for a bulk approve/revoke on a paginated list.**
   - *Key Points*:
     - Granular item cache update vs bulk list invalidation (`queryClient.invalidateQueries({ queryKey: ['access-items'] })`).
     - Optimistic updates via `queryClient.setQueryData` across paginated queries.
     - Handling total count updates when filtering by status (e.g. approving a "pending" item removes it from the pending filter query).

8. **How do you handle optimistic updates when two mutations overlap and one fails?**
   - *Key Points*:
     - Snapshot previous cache state on mutation start (`onMutate`).
     - Rollback to exact snapshot on failure (`onError`).
     - Mutation sequencing: Cancel in-flight queries (`queryClient.cancelQueries`) before applying optimistic patch to prevent race conditions.
     - Re-fetch on `onSettled` to sync authoritative server state.

---

### Domain 3: Performance & Next.js (2 Questions)

9. **A table has 50k rows. What are your options and their trade-offs, including accessibility with virtualization?**
   - *Key Points*:
     - **Pagination (Server-side)**: Low DOM node count, easy URL sharing, standard screen-reader navigation.
     - **Virtualization (Windowing - TanStack Virtual / react-window)**: Smooth continuous scrolling, keeps DOM node count under ~100 nodes.
     - *a11y Trade-off*: Screen readers and in-page `Ctrl+F` cannot discover virtualized (unmounted) DOM nodes. Solution: Provide search/filter controls, `aria-rowcount`, `aria-rowindex`, and accessible pagination mode fallback.

10. **For an authenticated enterprise dashboard, what should be server-rendered and what should stay client-side?**
    - *Key Points*:
      - **Server-rendered (SSR / RSC)**: Shell layout, navigation skeleton, user permission metadata, initial page data prefetch for fast FCP/LCP without layout shift.
      - **Client-side (CSR / Client Components)**: Interactive data tables, real-time status web sockets, optimistic mutation forms, complex modal workflows, filter controls.
      - *Security*: Sensitive tokens / session cookies verified at server middleware before emitting HTML.

---

### Domain 4: Enterprise Architecture & Tuebora Alignment (4 Questions)

11. **Design a config-driven UI where different personas or departments get different layouts with no code. Cover the schema, component registry, validation, and versioning.**
    - *Key Points*:
      - **JSON Schema**: Declarative layout definition (sections, grids, widgets, field permissions, condition rules e.g. `{ if: "risk == 'high'", show: "justificationField" }`).
      - **Component Registry**: Map string identifiers (`"AccessTable"`, `"RiskBadge"`) to lazy-loaded React components.
      - **Validation**: Schema validation with Zod / AJV at runtime with graceful fallback error boundaries for unknown widgets.
      - **Versioning**: Schema version header (`v1`, `v2`) with backward-compatible migration transformers.

12. **How do you model permission-aware UI, and what happens when permissions change mid-session?**
    - *Key Points*:
      - RBAC / ABAC model (Roles & Attributes). Declarative wrapper `<Can action="revoke" resource="entitlement">` or `usePermission()` hook.
      - **Mid-session permission change**: Server sends 403 Forbidden on API call or pushes event via WebSocket/SSE → Client invalidates user profile query → UI gracefully disables unauthorized controls + surfaces toast explaining revocation.

13. **How would you do multi-tenant theming with design tokens?**
    - *Key Points*:
      - CSS Custom Properties (Variables) injected at the root / container level (`--color-primary`, `--border-radius`, `--brand-logo`).
      - Design token tiers: Global tokens (colors, spacing) → Semantic tokens (`--surface-critical`, `--text-interactive`) → Component tokens.
      - Tenant stylesheet / token JSON loaded per subdomain or tenant header without rebuilding the application bundle.

14. **When do micro-frontends make sense, and what goes wrong (shared deps, versioning, routing)?**
    - *Key Points*:
      - *When they make sense*: Autonomous multi-team scaling, independent deployment pipelines across large decoupled enterprise domains.
      - *Failure modes & traps*: Dependency bloat (multiple React versions on same page), CSS leakage, fragmented navigation/routing history, shared state complexity, difficult end-to-end testing.
      - *Mitigations*: Module Federation (Webpack / Vite), shared design system package with strict peer dependencies, central auth orchestrator.

---

### Domain 5: AI & Agents (3 Questions)

15. **Describe an agent you shipped: its tools, guardrails, evaluation, and failure modes.**
    - *Key Points*:
      - *Tools*: Structured JSON schema tool calls (e.g. `queryAccessLog`, `revokeAccess`, `flagAnomalousEntitlement`).
      - *Guardrails*: Schema validation, output filtering, rate-limiting, human-in-the-loop confirmation before destructive actions.
      - *Evaluation*: Eval benchmark suite measuring tool selection accuracy, hallucination rate, latency, and context budget adherence.
      - *Failure Modes*: Tool hallucination, infinite looping, context exhaustion, prompt injection.

16. **Design the UI for natural-language queries like "who has admin on payroll and hasn't logged in for 90 days?" Cover streaming, showing the interpreted query, confirming before any action, and error states.**
    - *Key Points*:
      - **Streaming Response**: Real-time token streaming with skeleton / typing state.
      - **Interpreted Filter Translation**: Display structured pill filters generated by AI so the user can verify the translation (`App: Payroll`, `Role: Admin`, `Inactive: >90 days`).
      - **Human-in-the-Loop Confirmation**: For any resulting action (e.g. "Revoke 14 users"), show a strict confirmation modal with itemized diff.
      - **Error Recovery**: Suggest query corrections when query is ambiguous or schema properties don't match.

17. **If an AI agent had access to enterprise systems, what would you want logged and visible about it?**
    - *Key Points*:
      - **Audit Trail**: Agent model version, prompt hash, exact tool call inputs/outputs, confidence score, user session id, timestamp.
      - **Explainability**: Chain-of-thought / reasoning summary why a particular decision was recommended.
      - **Compliance Visibility**: Clear UI badge indicating whether an action was AI-recommended vs human-approved.

---

### Domain 6: API & Security (3 Questions)

18. **For the review list, cursor or offset pagination? How do you report per-item results when a bulk action partly fails?**
    - *Key Points*:
      - **Cursor vs Offset**: Offset (`page`/`pageSize`) allows jumping to arbitrary pages and showing total count (critical for compliance audits). Cursor (`cursor`/`limit`) is better for real-time mutating feeds without duplicate/missing rows.
      - **Partial Bulk Action Failures**: Return `207 Multi-Status` or structured payload `{ successfulIds: [...], failedIds: [{ id, reason }] }`. UI highlights failed rows in table and displays itemized retry toast.

19. **Describe an API or backend piece you owned and where your ownership ended. Be precise.**
    - *Key Points*:
      - Detail your role in API contract design, migration layer, OpenAPI/Swagger specifications, mock endpoints for frontend parallel development.
      - Articulate backend boundaries: idempotency keys (`Idempotency-Key` header on bulk mutations), HTTP status codes (200, 201, 207, 400, 401, 403, 409 Conflict, 429 Rate Limit), and resilience patterns.

20. **How do you secure the frontend of a compliance product (XSS, CSP, token storage, session expiry, audit trail)?**
    - *Key Points*:
      - **XSS**: React auto-escaping, avoiding `dangerouslySetInnerHTML`, DOMPurify for rich text.
      - **CSP (Content Security Policy)**: Strict `default-src 'self'`, forbidding `unsafe-inline` and `unsafe-eval`.
      - **Token Storage**: `httpOnly`, `Secure`, `SameSite=Strict` cookies (avoid localStorage for auth tokens to prevent XSS exfiltration).
      - **Session Expiry**: Inactivity timer modal, refresh token rotation with silent re-auth before expiry.
      - **Audit Trail**: Frontend event telemetry logging user action, timestamp, IP, and tenant ID.

---

### Domain 7: Behavioral & Fit (4 Questions)

21. **Tell me about yourself in 90 seconds.**
    - *Structure*: Present role & core identity (Senior Frontend / UI Engineer) → Track record & high-impact achievements (scale, performance, architecture) → Passion for enterprise security/IGA tooling → Why Tuebora is the perfect intersection.

22. **Why a small product company after a 200+ engineer org? Have an honest answer ready on the trade-offs.**
    - *Key Points*:
      - *Pros*: Greater ownership, direct customer impact, rapid feedback loop, end-to-end architecture decisions.
      - *Trade-offs acknowledged*: Less specialization / narrower infra tooling, wearing multiple hats, need for high self-direction.

23. **Tell me about a time you disagreed with a design or backend decision.**
    - *Structure*: Context → The technical disagreement (e.g. pagination strategy, data payload size, UX blocking) → How you evaluated trade-offs with data/benchmarks → Collaborative compromise reached → Positive project outcome.

24. **How do you use AI tools day to day, and where do they fail you?**
    - *Key Points*:
      - *Effective use*: Boilerplate generation, regex/parser creation, exploring alternative architectural patterns, drafting test suites.
      - *Where they fail*: Nuanced state synchronization, subtle race conditions in concurrent React, domain-specific enterprise security constraints, hallucinations in complex APIs. Always require human verification.

---

## Strategy Going Forward

### Days 1-22: JavaScript Mastery ✅

- 27 output-based questions (closures, hoisting, prototypes, async/await, generators)
- 6 JS-deep concepts (this binding, call/apply/bind, event delegation)
- 13 machine-coding (components, state management, APIs)

### Days 23-68: React Mastery 🚀

- **Week 1 (Days 23-28)**: React fundamentals + concepts
- **Week 2 (Days 29-35)**: Advanced patterns + performance
- **Week 3-4 (Days 36-50)**: React output questions + bug hunts
- **Weeks 5-10 (Days 51-68)**: Machine-coding with React context + system design

---

## Streak Goals

- **Current**: 17 days (Day 22)
- **Target Day 30**: 30-day streak, 60+ questions solved
- **Target Day 68**: 68-day streak, 100+ questions solved, 5 React concepts mastered

---
