# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Diners and restaurant patrons (both in-venue/dine-in via QR code scanning and remote customers placing pickup/delivery orders) seeking an effortless, elegant way to explore dishes, view ingredient profiles, and send structured orders directly to the venue.

## Product Purpose
Menú Digital provides a tactile, high-end digital menu experience for a Neo-Bistro restaurant. It allows guests to seamlessly navigate menu offerings across dual visual perspectives (Editorial Canvas & High-Density Grid), inspect dish details in full, customize order items, and checkout instantly via WhatsApp without account registration or app downloads.

## Positioning
A zero-friction, high-aesthetic Neo-Bistro web menu combining publication-grade editorial typography and fluid micro-interactions with direct-to-WhatsApp checkout ordering.

## Operating Context
- **In-Venue / Mobile Browsing**: Guests scanning QR codes at tables on mobile devices (iOS Safari / Android Chrome) needing rapid page paint and smooth touch interactions.
- **Desktop Exploration**: High-resolution desktop visitors using smooth Lenis scrolling and dual view layout toggling.
- **WhatsApp Checkout**: Direct conversion path compiling cart payloads into WhatsApp API links for real-time order processing by venue staff.

## Capabilities and Constraints
- **Framework & Runtime**: Built on Astro v7.0.6 (SSG), Node.js (>=22.12.0), Tailwind CSS v4.3.2, and GSAP v3.15.0.
- **Cart & State**: Client-side TypeScript cart store (`src/utils/cartStore.ts`) enforcing item limits (1 to 99) and dispatching decoupled custom `cart-updated` DOM events with `localStorage` persistence.
- **View Toggling**: Dual-mode presentation supporting asymmetric Editorial Canvas view (`MenuCanvas.astro`) and High-Density Grid view (`MenuGallery.astro`).
- **Modal & Scroll Handling**: Hardware-accelerated mobile scrolling with Lenis desktop scroll synchronization, modal body scroll locking (`modal-open`), and `data-lenis-prevent` scroll isolation.
- **WhatsApp Redirection**: Dynamic payload compilation and URI encoding passed to `window.open` targeting WhatsApp.

## Brand Commitments
- **Name**: Menú Digital (Neo-Bistro Menu)
- **Aesthetic Tone**: Tactile grain overlays, dark mode base (`#1A1A1A`), sophisticated editorial typography, and fluid GSAP animation orchestrations.

## Evidence on Hand
- Complete single-page Astro application with components (`Cover.astro`, `MenuCanvas.astro`, `MenuGallery.astro`, `Dossier.astro`, `DishProfile.astro`, `FloatingCartBar.astro`, `OrderSheet.astro`, `Loader.astro`, `Navbar.astro`).
- Unit test suite (`tests/unit/`) using Vitest and E2E test suite (`tests/e2e/`) using Playwright.

## Product Principles
- **Zero Friction to Order**: Eliminate login barriers, form bloat, and app installs by routing orders straight to WhatsApp.
- **Editorial Elegance First**: Treat the menu like a high-fashion culinary magazine rather than a generic digital spreadsheet.
- **Fluid & Performant**: Maintain smooth 60fps animations with hardware acceleration on mobile and Lenis coordination on desktop.
- **Decoupled Architecture**: Rely on native custom DOM events and vanilla TypeScript stores for clean component communication.

## Accessibility & Inclusion
- Full keyboard navigation support (Enter / Space activation) for dish rows and cards.
- Mobile-first responsive touch targets and modal traps for screen reader and keyboard accessibility.
