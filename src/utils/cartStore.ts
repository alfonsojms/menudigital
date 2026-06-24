// Client-side cart store synchronized with localStorage.
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('menudigital_cart');
  return stored ? JSON.parse(stored) : [];
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('menudigital_cart', JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
}

export function addToCart(dish: { id: string; name: string; price: number; image: string }) {
  const cart = getCart();
  const existing = cart.find(item => item.id === dish.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }
  saveCart(cart);
}

export function removeFromCart(dishId: string) {
  let cart = getCart();
  const existing = cart.find(item => item.id === dishId);
  if (existing) {
    existing.quantity -= 1;
    if (existing.quantity <= 0) {
      cart = cart.filter(item => item.id !== dishId);
    }
  }
  saveCart(cart);
}

export function updateCartQuantity(dishId: string, quantity: number) {
  let cart = getCart();
  const existing = cart.find(item => item.id === dishId);
  if (existing) {
    existing.quantity = quantity;
    if (existing.quantity <= 0) {
      cart = cart.filter(item => item.id !== dishId);
    }
  }
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartItemsCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}
