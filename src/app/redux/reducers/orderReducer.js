const initialState = { drink: "" };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DRINKORDER':
      return { drink: state.drink + action.payload };
    // case 'DECREMENT':
    //   return { count: state.count - 1 };
    default:
      return state;
  }
};

export default orderReducer;