import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  order: orderReducer,
  // cart: cartReducer,
});

export default rootReducer;