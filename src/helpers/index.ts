const priceFormatter = (price: number) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};

const calculateTotal = (cartItems: any[]) => {
  return cartItems.reduce(
    (accumulatedQty: number, cartItem: { quantity: number; price: number }) =>
      accumulatedQty + cartItem.quantity * cartItem.price,
    0
  );
};

export { priceFormatter, calculateTotal };
