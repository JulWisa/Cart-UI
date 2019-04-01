import {ADD_PRODUCT_TO_CART} from "../actions/action-types";

const initialState = [
    {id: 0, name: "Яблоко", price: 86, count: 0},
    {id: 1, name: "Томат", price: 109, count: 4},
    {id: 2, name: "Морковь", price: 39, count: 7},
    {id: 3, name: "Апельсин", price: 73, count: 3},
    {id: 4, name: "Лимон", price: 52, count: 5}];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART :{
            if (action.product.count === 0) return state;
            let product = Object.assign({}, action.product);
            product.count--;
            let newState = [...state];
            let i = newState.indexOf(action.product);
            newState[i] = product;
            return newState;
        }
        default: return state;
    }
};