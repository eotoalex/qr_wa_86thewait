import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import { screenSizeReducer } from './screenSizeReducer';

const rootReducer = combineReducers({
  drink: orderReducer,
  screenSize: screenSizeReducer,
});

export default rootReducer;

// import { combineReducers } from 'redux';
// import { screenSizeReducer } from './reducer';

// const rootReducer = combineReducers({
//   screenSize: screenSizeReducer,
//   // ...other reducers
// });

// export default createStore(rootReducer);