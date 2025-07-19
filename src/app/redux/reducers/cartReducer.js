const initialState = {
    shart:[]
  };
  
  export function cartReducer(state = initialState, action) {
    switch(action.type) {
      case 'CART':
        // might to add + sign to the initial state instead of replacing the initial state.
        return initialState;
      default:
        return state;
    }
  }