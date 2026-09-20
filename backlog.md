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

## Performance Topics

### ✅ Completed (0)

### ⏳ Backlog (3 topics)

1. **Lazy Loading (React.lazy, Suspense, dynamic imports)**
   - Code splitting with dynamic import()
   - React.lazy() component wrapping
   - Suspense boundaries
   - Fallback UI
   - Error boundaries

2. **Tree Shaking**
   - ES6 modules enable tree shaking
   - Side-effects configuration in package.json
   - Named vs default exports
   - Build tools (webpack, Rollup)
   - What doesn't get shaken

3. **Code Splitting + Bundle Analysis**
   - Route-based code splitting
   - Component-based splitting
   - Bundle analysis tools (webpack-bundle-analyzer)
   - Identifying large chunks
   - Dynamic imports
   - Prefetching vs preloading

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
