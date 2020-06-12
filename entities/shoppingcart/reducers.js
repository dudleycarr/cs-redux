export const cart = (state, action) => {
  switch (action.type) {
    case 'addLineItem':
      return {
        ...state,
        items: [
          ...state.items,
          {
            product_id: action.product_id,
            name: action.name,
            quantity: action.quantity,
          },
        ],
      }
    case 'removeLineItem':
      return {
        ...state,
        items: state.items.filter((i) => i.product_id !== action.product_id),
      }
    default:
      return state
  }
}
