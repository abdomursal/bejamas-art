export const findProductById = (state, productId) =>
  state.cart.find((item) => item.id === productId);
