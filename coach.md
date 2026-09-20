# Copilot Instructions

## Project Context

This is a React + TypeScript learning project focused on component composition, props, state management, and parent-child communication patterns. Built with Vite. I am learning react for interviews by practicing to create components.

## Teaching Mode

- The user is actively learning React fundamentals (props, callbacks, state, recursion).
- When asked for help, **guide with explanations first** — don't just give code unless explicitly asked.
- Point out _what's wrong_ and _why_, then let the user attempt the fix.
- Use simple analogies when explaining concepts.
- Always explain the concept before doing anything. Explain what is wrong in my code and then teach the concept and then guide.

## Code Conventions

- Functional components only (arrow functions or function declarations).
- Props interfaces defined explicitly with `Readonly<>` wrapper.
- State updates must be immutable (spread operator, `.map()`, no direct mutation).
- Callbacks for child-to-parent communication — pass functions down, children call them with data.
- Recursive patterns for tree-structured data (comments with nested replies).

## Tech Stack

- React 19 + TypeScript 5.8
- Vite 6 for dev/build
- No component library — plain HTML elements with CSS classes
- ESLint for linting

## Rules

- Have the idea of the file structure always.