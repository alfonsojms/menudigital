import { beforeEach, describe, it, expect, vi } from 'vitest';
import {
  getCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  getCartTotal,
  getCartItemsCount,
  MAX_QUANTITY
} from '../../src/utils/cartStore';

describe('cartStore unit tests', () => {
  beforeEach(() => {
    localStorage.clear();
    clearCart();
    vi.restoreAllMocks();
  });

  it('should start with an empty cart', () => {
    expect(getCart()).toEqual([]);
    expect(getCartTotal()).toBe(0);
    expect(getCartItemsCount()).toBe(0);
  });

  it('should add items to the cart and update localStorage', () => {
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);

    expect(getCart()).toEqual([{ ...dish, quantity: 1 }]);
    expect(getCartItemsCount()).toBe(1);
    expect(getCartTotal()).toBe(5.5);

    // Verify localStorage persistence
    const stored = localStorage.getItem('menudigital_cart');
    expect(stored).not.toBeNull();
    expect(JSON.parse(stored!)).toEqual([{ ...dish, quantity: 1 }]);
  });

  it('should increment quantity when adding the same item multiple times', () => {
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);
    addToCart(dish);

    expect(getCart()).toEqual([{ ...dish, quantity: 2 }]);
    expect(getCartItemsCount()).toBe(2);
    expect(getCartTotal()).toBe(11);
  });

  it('should remove items or decrement quantity correctly', () => {
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);
    addToCart(dish);

    removeFromCart('1');
    expect(getCart()).toEqual([{ ...dish, quantity: 1 }]);

    removeFromCart('1');
    expect(getCart()).toEqual([]);
    expect(getCartItemsCount()).toBe(0);
    expect(getCartTotal()).toBe(0);
  });

  it('should update cart quantity directly', () => {
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);

    updateCartQuantity('1', 5);
    expect(getCart()[0].quantity).toBe(5);

    // Updating to <= 0 should remove the item
    updateCartQuantity('1', 0);
    expect(getCart()).toEqual([]);
  });

  it('should enforce quantity bounds limit (min/max bounds)', () => {
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);

    // Try setting quantity above MAX_QUANTITY
    updateCartQuantity('1', MAX_QUANTITY + 10);
    expect(getCart()[0].quantity).toBe(MAX_QUANTITY);

    // Try adding to cart when already at MAX_QUANTITY
    addToCart(dish); // quantity remains MAX_QUANTITY
    expect(getCart()[0].quantity).toBe(MAX_QUANTITY);

    // Try updating to negative/zero quantity (minimum bounds test - should remove)
    updateCartQuantity('1', -5);
    expect(getCart()).toEqual([]);
  });

  it('should dispatch cart-updated custom event when cart changes', () => {
    const dispatchSpy = vi.spyOn(document, 'dispatchEvent');
    const dish = { id: '1', name: 'Taco', price: 5.5, image: 'taco.jpg' };
    addToCart(dish);

    expect(dispatchSpy).toHaveBeenCalled();
    const event = dispatchSpy.mock.calls[0][0] as CustomEvent;
    expect(event.type).toBe('cart-updated');
    expect(event.detail.cart).toEqual([{ ...dish, quantity: 1 }]);
  });
});
