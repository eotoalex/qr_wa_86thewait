import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  // Redux DevTools support
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(rootReducer);

// import { combineReducers } from 'redux';
// import { screenSizeReducer } from './reducer';

// const rootReducer = combineReducers({
//   screenSize: screenSizeReducer,
//   // ...other reducers
// });

// export default createStore(rootReducer);
