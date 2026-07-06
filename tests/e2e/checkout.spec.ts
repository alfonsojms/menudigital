import { test, expect } from '@playwright/test';

test.describe('Mobile checkout flow', () => {
  test('should add an item to the cart, open the order sheet, and redirect to WhatsApp with the correct message payload', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Wait for the loader to disappear
    const loader = page.locator('#loader');
    await expect(loader).toBeHidden({ timeout: 10000 });

    // Select the first active add-to-cart button
    const firstAddBtn = page.locator('.add-to-cart-btn').first();
    await expect(firstAddBtn).toBeVisible();

    // Get dish details
    const dishName = await firstAddBtn.getAttribute('data-dish-name') || '';
    const dishPrice = parseFloat(await firstAddBtn.getAttribute('data-dish-price') || '0');

    // Click the button to add to cart
    await firstAddBtn.click();

    // Verify the floating cart bar is displayed
    const cartBar = page.locator('#floating-cart-bar');
    await expect(cartBar).toBeVisible();

    // Click the floating cart bar to open the drawer using page.evaluate to avoid animation/viewport race conditions
    await page.evaluate(() => {
      const bar = document.getElementById('floating-cart-bar');
      if (bar) bar.click();
    });

    // Wait for drawer slide-up transition to fully complete
    await page.waitForTimeout(1000);

    // Verify the drawer is visible
    const drawer = page.locator('#order-sheet-drawer');
    await expect(drawer).toBeVisible();

    // Focus and fill the delivery info form
    const nameInput = page.locator('#order-name');
    await nameInput.focus();
    await nameInput.fill('John Doe');
    
    const addressInput = page.locator('#order-address');
    await addressInput.focus();
    await addressInput.fill('123 Main St, Springfield');

    // Setup redirection interception on the window object
    await page.evaluate(() => {
      (window as any)._interceptedWaUrl = null;
      window.open = (url) => {
        (window as any)._interceptedWaUrl = url;
        return null;
      };
    });

    // Click the checkout submit button via client-side DOM dispatch to prevent viewport issues
    await page.evaluate(() => {
      const btn = document.getElementById('submit-order-whatsapp');
      if (btn) (btn as HTMLElement).click();
    });

    // Retrieve the intercepted URL
    const interceptedUrl = await page.evaluate(() => (window as any)._interceptedWaUrl);

    // Verify the intercepted URL points to WhatsApp API and has the correct payload
    expect(interceptedUrl).not.toBeNull();
    expect(interceptedUrl).toContain('wa.me');
    
    const decodedUrl = decodeURIComponent(interceptedUrl);
    expect(decodedUrl).toContain('John Doe');
    expect(decodedUrl).toContain('123 Main St, Springfield');
    expect(decodedUrl).toContain(dishName);
    expect(decodedUrl).toContain(dishPrice.toFixed(2));
  });
});
