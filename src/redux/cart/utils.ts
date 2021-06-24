export const addItemsToCart = (
  cartItems: any[],
  cartItemToAdd: { id: any }
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: any }) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems;
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const reduceItemQty = (
  cartItems: any[],
  cartItemToRemove: { id: any }
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const incrementItemQty = (
  cartItems: any[],
  cartItemToAdd: { id: any }
) => {
  return cartItems.map((cartItem: { id: any; quantity: any; stock: any }) => {
    if (cartItem.quantity === cartItem.stock) return cartItem;
    return cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem;
  });
};
