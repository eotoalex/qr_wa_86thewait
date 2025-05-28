const initialState = {
    width: 0,
    height: 0,
  };
  
  export function screenSizeReducer(state = initialState, action) {
    switch(action.type) {
      case 'SET_SCREEN_SIZE':
        return action.payload;
      default:
        return state;
    }
  }