## Exploration: Automated Testing Framework for menudigital

### Current State
`menudigital` is an Astro-based digital menu application featuring interactive menus, cart state, and an order sheet. Currently, there is no automated testing framework in place. Key client-side functionality includes:
- [cartStore.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/utils/cartStore.ts): Manages state for the cart, updating localStorage, and dispatching custom DOM events.
- Client-side scripts inside Astro components (e.g., [FloatingCartBar.astro](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/components/menu/FloatingCartBar.astro), [OrderSheet.astro](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/components/menu/OrderSheet.astro)) that listen to events, update UI text, toggle CSS classes (handling animations), and register click events.

### Affected Areas
- [package.json](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/package.json) — Add test dependencies (Playwright, Vitest) and execution scripts.
- [cartStore.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/utils/cartStore.ts) — Will be covered by unit tests (Vitest).
- `src/components/` and `src/pages/` — Will be validated via E2E tests (Playwright) during user flows.

### Approaches

| Tool | Focus | Pros | Cons | Effort |
| :--- | :--- | :--- | :--- | :--- |
| **Playwright** | End-to-End & Viewport | • Real browser rendering (Chromium, Firefox, WebKit)<br>• Simulates mobile/desktop viewports easily<br>• Fully exercises client-side animations (GSAP) and event listeners | • Slower execution than unit tests<br>• Requires local server execution | Medium |
| **Vitest** | Unit/Logic Testing | • Extremely fast execution<br>• Zero configuration TypeScript support<br>• Perfect for testing `cartStore.ts` logic with mocked localStorage | • Cannot test Astro rendering easily<br>• Does not test responsive styling or visual states | Low |

### Recommendation
Introduce a **hybrid testing strategy**:
1. **Playwright** for E2E user flows (adding/removing items to the cart, opening/closing the order sheet, simulating mobile/desktop layouts, and checking interactive components).
2. **Vitest** for testing the core cart calculations and localStorage persistence logic in [cartStore.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/utils/cartStore.ts).

This hybrid approach ensures high confidence in user interactions while maintaining fast feedback loops for core application logic.

### Risks
- **Flakiness in Animations**: GSAP and entry animations might cause timing issues in E2E tests. We will need to use Playwright's auto-waiting locators or configure a reduced-motion environment for testing.
- **LocalStorage State**: State from previous tests could persist. We need setup/teardown code to clear localStorage between tests.

### Ready for Proposal
Yes — The setup is straightforward, and introducing both Playwright and Vitest will cover all bases without interfering with the existing Astro structure.
