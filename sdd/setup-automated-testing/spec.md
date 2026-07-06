# Specification: Setup Automated Testing

## 1. Requirements

### 1.1 Logic/Unit Testing (Vitest)
- The test suite MUST cover all business logic inside [cartStore.ts](file:///C:/Users/Brasero/Documents/Clases%20programacion/Menudigital/src/utils/cartStore.ts).
- Tests MUST validate:
  - Adding, updating, and removing cart items.
  - Cart calculations (subtotals, totals, item counts).
  - Quantity bounds enforcement (minimum and maximum limits).
- The `localStorage` interface MUST be mocked to prevent state pollution, and MUST be cleared before each test run.

### 1.2 End-to-End Testing (Playwright)
- E2E tests MUST execute on a simulated mobile viewport (e.g., iPhone or Android Chrome).
- Tests MUST validate UI interactions:
  - Adding items via the menu.
  - Toggling/interacting with the floating cart bar.
  - Opening/closing the order checkout sheet.
- The checkout redirection to WhatsApp MUST be verified by intercepting or observing window location changes. The test MUST NOT trigger an actual external redirect to the live WhatsApp API.
- The generated URL payload MUST match the specified query parameters representing the cart contents.

---

## 2. Test Scenarios

### Scenario 1: Cart logic item modification (Vitest)
- **Given** an empty shopping cart state
- **When** an item is added to the cart and its quantity is incremented
- **Then** the cart store MUST compute the updated subtotal and item count correctly, and it MUST sync the exact payload to `localStorage`.

### Scenario 2: Quantity bounds limit (Vitest)
- **Given** a shopping cart containing an item already at the maximum allowed quantity limit
- **When** a request is made to increment the quantity of that item
- **Then** the cart store MUST reject the update, maintain the maximum limit, and MUST NOT exceed the bounds.

### Scenario 3: Mobile checkout WhatsApp redirection (Playwright)
- **Given** a user navigating the mobile application menu on a simulated mobile viewport
- **When** the user adds multiple items to their cart, opens the checkout sheet, and clicks the submit checkout button
- **Then** the application MUST attempt to redirect the browser to the WhatsApp endpoint, and the intercepted URL query payload MUST contain the formatted checkout items, quantities, and correct subtotal.
