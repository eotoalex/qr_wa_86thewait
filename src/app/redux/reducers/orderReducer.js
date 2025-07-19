const initialState = { 
    drink: "",
    cart:[] };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'DRINKORDER':
      return { ...state , drink: action.payload};
      case 'INGREDIENTS':
      return {...state, ingredients: action.payload };
      case 'ADDTOCART':
      return {...state, cart: [...state.cart, action.payload] };
      default:
      return state;
  }
};

export default orderReducer;