# design.md

This document outlines the architectural decisions and design patterns established for the **Menú Digital** application.

## Core Architecture
The project is built on **Astro 7** as a static site. The layout is optimized to be lightweight, with rapid initial paint times on mobile networks.

## Technical Design Patterns

### 1. State Management (Shopping Cart)
- **Path**: `src/utils/cartStore.ts`
- **Pattern**: A simple, vanilla TypeScript state object that synchronizes with `localStorage`.
- **Communication**: Inter-component communication is handled by dispatching custom DOM events (`cart-updated`) from the store. This keeps the components decoupled from framework-specific reactivity, allowing direct DOM manipulations.
- **Constraints**: Enforces bounds limits (minimum of `1` and maximum of `99` items per dish).

### 2. Smooth Scrolling & Animation Coordination
- **Smooth Scroll**: Powered by **Lenis** on desktop. On mobile viewports (<768px), Lenis is disabled, and native hardware-accelerated scrolling is utilized to prevent touch momentum conflicts.
- **Scroll Synchronization**: Lenis scroll triggers update GSAP's `ScrollTrigger` positioning.
- **Viewport Shifts**: Configured `history.scrollRestoration = 'manual'` to avoid browser-level horizontal scroll jumps on refresh while GSAP animations are initializing.
- **HTML/Body Clips**: Layout wraps strictly bound widths (`overflow-x: hidden`) to prevent viewport stretching.

### 3. Split Screen Modals & Drawers
- **Dish Details**: Managed in `DishProfile.astro`.
- **Checkout Sheet**: Managed in `OrderSheet.astro`.
- **Interactions**: Modals are overlayed dynamically. Scrolling on the underlying body is locked (`body.classList.add('modal-open')`) when active, while modal scroll areas are preserved using `data-lenis-prevent`.

### 4. Checkout Redirection
- **Workflow**: Customer selects items → opens drawer → fills name and address → clicks WhatsApp button.
- **Execution**: Text payload is compiled and encoded as query parameters, then opened via `window.open` targeting WhatsApp Web/API.
