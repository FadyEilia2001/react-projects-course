function reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else return cartItem;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem.amount !== 0),
    };
  }

  return state;
}

export default reducer;
