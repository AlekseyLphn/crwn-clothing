import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReduser } from './cart/cart.reducer';

export const rootReduser = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReduser,
});
