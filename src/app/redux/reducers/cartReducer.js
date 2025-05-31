const initialState = {
    width: 0,
    height: 0,
  };
  
  export function screenSizeReducer(state = initialState, action) {
    switch(action.type) {
      case 'CART':
        // might to add + sign to the initial state instead of replacing the initial state.
        return action.payload;
      default:
        return state;
    }
  }