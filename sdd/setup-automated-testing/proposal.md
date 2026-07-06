# Proposal: Setup Automated Testing Framework

## Intent
Establish a robust, automated testing suite for `menudigital` combining unit/logic testing (Vitest) and End-to-End browser-based testing (Playwright) to validate client-side cart logic, DOM event integration, and mobile checkout redirect flows under simulated viewports.

## Scope
- **In Scope**:
  - Local installation and configuration of Vitest and Playwright.
  - Unit tests for `src/utils/cartStore.ts` logic (cart calculations, quantity limits, and localStorage sync).
  - End-to-End functional tests on simulated mobile viewports validating the floating cart bar, order sheet interactions, and the WhatsApp checkout redirection payload.
  - local-only execution scripts in `package.json` for running tests and coverage.
- **Out of Scope**:
  - Setting up CI/CD pipeline configuration (e.g., GitHub Actions workflow).
  - Visual regression testing (screenshot comparison) and animation validation.

## Capabilities
- **New Capabilities**:
  - `npm run test`: Runs logic/unit tests via Vitest locally.
  - `npm run test:e2e`: Runs E2E functional tests via Playwright locally.
  - Checkout Simulation: Automated verification of the generated checkout payload sent on WhatsApp redirect.
- **Modified Capabilities**:
  - None.

## Approach
1. **Vitest Integration**: Setup Vitest to test utility methods in `src/utils/cartStore.ts`. Mock `localStorage` to ensure clean environment isolation per test run.
2. **Playwright Integration**: Configure Playwright for local testing. Configure it to prioritize mobile viewport devices (e.g., iPhone/Android Chrome simulation) to test the responsive mobile menu interface.
3. **Checkout Flow Testing**: Write E2E tests simulating addition of items, opening the order sheet, and validating the final target redirect URL/payload matching the expected structure.

## Affected Areas
- `package.json` (test scripts and packages)
- `src/utils/cartStore.ts` (unit coverage)

## Risks & Mitigation
- **Flakiness in Mobile Redirection**: Since the checkout redirects to WhatsApp, tests should intercept the navigation or verify the window location change without executing the actual external WhatsApp API redirect.
- **State Pollution**: Use setup/teardown hooks to reset localStorage and DOM states before each test run.

## Rollback Plan
- Revert additions in `package.json` and delete the test configuration files (`playwright.config.ts`, `vitest.config.ts`) and any files under `tests/`.

## Dependencies
- Node.js (local environment)
- Playwright, Vitest

## Success Criteria
- 100% of logic tests and mobile E2E functional flow tests pass locally.
- Coverage reports generated for `cartStore.ts`.
