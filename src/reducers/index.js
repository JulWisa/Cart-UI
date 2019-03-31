import {combineReducers} from 'redux';
import {cartReducer} from "./cart-reducer";
import {productsReducer} from "./products-reducer";

export const reducers = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer
});