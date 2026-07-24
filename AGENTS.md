# AGENTS.md

Welcome to the **Menú Digital** codebase. This file provides guidelines and context for AI coding assistants working on this repository.

## Project Stack
- **Framework**: Astro (v7.0.6) - Static Site Generation (SSG)
- **Styling**: Tailwind CSS (v4.3.2) - Utility-first styling
- **Animations**: GSAP (v3.15.0) - High-performance timeline animations
- **Smooth Scroll**: Lenis (v1.0.42) - Desktop-only smooth scrolling
- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js (>=22.12.0)
- **Package Manager**: npm

## Key Commands
- **Development Server**: `npm run dev`
- **Network Expose**: `npm run dev:host`
- **Production Build**: `npm run build`
- **Local Preview**: `npm run preview`
- **Unit Tests (Vitest)**: `npm run test`
- **E2E Tests (Playwright)**: `npm run test:e2e`

## Development Rules
- **Commit Messages**: Conventional commits only (e.g., `feat:`, `fix:`, `build:`, `style:`). Never append "Co-Authored-By" or AI attributions.
- **Mobile First**: All interface elements, drawers, and buttons must fit strictly within mobile viewports. Avoid fixed margins that stretch the horizontal layout.
