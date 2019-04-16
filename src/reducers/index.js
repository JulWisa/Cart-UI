import {combineReducers} from 'redux';
import {cartReducer} from "./cartReducer";
import {productsReducer} from "./productsReducer";

export const reducers = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer
});