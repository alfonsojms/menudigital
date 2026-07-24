---
name: Menú Digital
description: Premium Neo-Bistro digital menu and direct WhatsApp ordering experience
colors:
  primary: "#E62020"
  neutral-bg: "#1A1A1A"
  surface: "#262626"
  text-high: "#EAEAEA"
  text-muted: "#A3A3A3"
  accent-yellow: "#FFD500"
  accent-orange: "#F58220"
  accent-pepperoni: "#D91E1E"
typography:
  display:
    fontFamily: "Lilita One, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: "1.1"
  sans:
    fontFamily: "Rubik, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: "1.4"
rounded:
  full: "9999px"
  card-top: "32px"
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-pill:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "16px 24px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-high}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card-top}"
    padding: "24px"
---

# Design System: Menú Digital

## Overview

**Creative North Star: "The Editorial Gastronomy"**

Menú Digital embodies a tactile dark elegance created specifically for a Neo-Bistro restaurant experience. It merges publication-grade display typography with fluid GSAP micro-interactions, dark charcoal surfaces (`#1A1A1A`), and high-contrast accent highlights.

The interface is structured as an interactive culinary magazine: guests explore dishes either through a narrative Editorial Canvas or a high-density Grid Gallery. Floating glassmorphic navigation pills and interactive drawers provide smooth transitions while keeping ordering effortless.

**Key Characteristics:**
- **Tactile Dark Background:** Charcoal black (`#1A1A1A`) with subtle SVG noise texture.
- **Publication-Grade Typography:** Playful display titles paired with clean geometric sans and technical monospace data.
- **Symmetric Glassmorphic Nav:** Floating pill header with backdrop blur and dynamic theme transitions on scroll.
- **Vibrant High-Contrast Accents:** Mustard Yellow (`#FFD500`) and Harissa Orange (`#F58220`) for interactive triggers.
- **Fluid Micro-Interactions:** GSAP animations powered by `cubic-bezier(0.16, 1, 0.3, 1)` easing.

## Colors

The palette balances deep dark neutrals with vibrant culinary accents to convey luxury fast-casual and neo-bistro energy.

### Primary
- **Bold Pepperoni Red** (`#E62020`): Used for primary action buttons, active navigation indicators, cart badges, and destructive alerts.

### Neutral
- **Charcoal Black** (`#1A1A1A`): Primary application background color, providing high contrast for imagery and typography.
- **Limestone Surface** (`#262626`): Card containers, drawer backgrounds, and secondary elevation layers.
- **Ash White** (`#EAEAEA`): Primary text color for high legibility on dark surfaces.
- **Fennel Muted Gray** (`#A3A3A3`): Secondary text, subtitles, dish descriptions, and inactive states.

### Secondary & Accents
- **Vibrant Mustard Yellow** (`#FFD500`): Sticky floating cart pill, segmented switcher highlights, and keyboard focus outlines.
- **Harissa Orange** (`#F58220`): Secondary highlights, tag badges, and warm promotional callouts.

### Named Rules
**The Dark Surface Rule.** All primary pages use Charcoal Black (`#1A1A1A`) as baseline. Bright colors (`#FFD500`, `#E62020`) are reserved exclusively for interactive triggers and status indicators.
**The High Contrast Pill Rule.** Key floating action bars use Mustard Yellow (`#FFD500`) with black typography to ensure instant visual priority.

## Typography

**Display Font:** `Lilita One, sans-serif`  
**Body Font:** `Rubik, sans-serif`  
**Monospace / Metadata Font:** `JetBrains Mono, monospace`  

**Character:** Bold, friendly, and structured. Display typography brings warmth and editorial personality, while Rubik and JetBrains Mono supply clarity and technical precision.

### Hierarchy
- **Display** (Regular 400, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.1): Hero headings and major dish profile titles.
- **Headline** (Bold 700, `1.5rem` / `24px`, line-height 1.2): Section titles and modal headings.
- **Body** (Regular 400, `1rem` / `16px`, line-height 1.5): Dish ingredient descriptions and explanatory text.
- **Label / Mono** (Bold 700, `0.75rem` / `12px`, uppercase, tracking-wider): Prices, cart count badges, view switcher tabs, and category filters.

### Named Rules
**The Monospace Metadata Rule.** All prices, quantities, and operational labels must be rendered in `JetBrains Mono` with uppercase tracking.

## Layout

- **Grid System:** Asymmetric 12-column layout on desktop; single-column fluid stack on mobile.
- **Container Strategy:** Max content width capped at `1200px` centered with auto margins. Card containers feature rounded top sheets (`32px` on mobile, `48px` on desktop).
- **Responsive Rhythm:** Mobile-first vertical stacking with strictly bound horizontal width (`overflow-x: hidden`).

## Elevation & Depth

Surfaces rely on dark tonal layering (`#1A1A1A` base with `#262626` cards) combined with deep diffuse shadows for overlays.

### Shadow Vocabulary
- **Card Sheet Shadow** (`box-shadow: 0 -20px 50px rgba(0,0,0,0.6)`): Applied behind sliding bottom card containers.
- **Floating Pill Shadow** (`box-shadow: 0 12px 40px rgba(0,0,0,0.6)`): Applied to floating cart pills and modal triggers.

### Named Rules
**The Layered Sheet Rule.** Modals and main content containers slide up over background elements as physical sheets with top rounded corners and dark ambient shadows.

## Shapes

- **Floating Pills:** Full rounded radii (`9999px`) for navigation headers, view switchers, cart pills, and category tags.
- **Content Cards:** Top-rounded corners (`32px` mobile / `48px` desktop) for major section sheets.
- **Inner Buttons:** Medium rounded corners (`8px` to `12px`) for quantity controls and secondary action buttons.

## Components

### Floating Cart Bar
- **Shape:** Full pill (`9999px`)
- **Primary Style:** Mustard Yellow (`#FFD500`) background, `#1A1A1A` text, monospace price and item counter.
- **Hover / Transition:** Scaled `1.02x` on hover with cubic spring easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

### View Switcher (Segmented Control)
- **Shape:** Pill container (`9999px`) with glassmorphism backdrop blur.
- **Active State:** Mustard Yellow sliding highlight (`#FFD500`) under black active tab text.
- **Inactive State:** Semi-transparent muted text (`rgba(255,255,255,0.6)`).

### Dish Profile Modal
- **Shape:** Split screen overlay / bottom drawer with rounded top (`32px`).
- **Background:** Limestone Surface (`#262626`).
- **Header:** Sticky dish title with close button and image gallery header.

## Do's and Don'ts

### Do:
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for smooth GSAP transitions and drawer animations.
- **Do** ensure all interactive elements display a 2px Mustard Yellow (`#FFD500`) outline on focus for accessibility.
- **Do** enforce mobile viewport constraints with `overflow-x: hidden`.

### Don't:
- **Don't** use standard unstyled browser scrollbars; keep scrollbars styled or hidden for clean layout presentation.
- **Don't** mix non-standard font families outside `Lilita One`, `Rubik`, and `JetBrains Mono`.
- **Don't** introduce light theme backgrounds that break the dark Neo-Bistro atmosphere.
