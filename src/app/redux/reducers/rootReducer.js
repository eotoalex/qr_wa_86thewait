import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import { cart } from './cartReducer';

const rootReducer = combineReducers({
  order: orderReducer,
  cart: "Selected Items Here",
});

export default rootReducer;