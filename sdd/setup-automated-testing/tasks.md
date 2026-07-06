# Task Breakdown: Setup Automated Testing

```text
Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low
```

## Phase 1: Foundation (Packages Installation & Config)
- [x] Install package dependencies: `npm install -D vitest jsdom @vitest/coverage-v8 @playwright/test`
- [x] Update `package.json` with scripts:
  - `"test": "vitest run"`
  - `"test:watch": "vitest"`
  - `"test:coverage": "vitest run --coverage"`
  - `"test:e2e": "playwright test"`
- [x] Create [vitest.config.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/vitest.config.ts) with `jsdom` environment, globals, and `src/utils/cartStore.ts` coverage target.
- [x] Create [playwright.config.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/playwright.config.ts) configured for `tests/e2e`, mobile Chrome/Safari, and local webServer on port 4321.

## Phase 2: Core Implementation (Vitest & Unit Tests)
- [x] Create unit test folder `tests/unit/`
- [x] Implement [cartStore.test.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/tests/unit/cartStore.test.ts):
  - Mock and clear `localStorage` in `beforeEach`.
  - Write test for item addition, updating, and removal.
  - Write test for cart calculations (subtotal, total, items count).
  - Write test for quantity bounds limit validation (min/max bounds).

## Phase 3: Integration (Playwright Setup & E2E Checkout Test)
- [x] Download Playwright browser binaries: `npx playwright install --with-deps`
- [x] Create E2E test folder `tests/e2e/`
- [x] Implement [checkout.spec.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/tests/e2e/checkout.spec.ts):
  - Emulate mobile viewport.
  - Add items to the cart and toggle floating cart bar.
  - Open order checkout sheet.
  - Mock checkout button redirection to intercept WhatsApp redirect URL payload (validating items and subtotal details in the WA API link) without hitting external network.

## Phase 4: Testing
- [x] Execute `npm run test` to verify Vitest unit tests pass successfully.
- [x] Execute `npm run test:coverage` to verify coverage metric capture for `cartStore.ts`.
- [x] Execute `npm run test:e2e` to verify Playwright E2E tests run and pass.

## Phase 5: Cleanup
- [x] Remove temporary files or test artifacts.
- [x] Verify no stray mock endpoints remain active.
