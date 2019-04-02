import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_TYPE_FROM_CART} from "../actions/action-types";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            if(action.product.count === 0) return state;

            let product = Object.assign({}, action.product);
            if (state.length === 0) {
                product.count = 1;
                return [product];
            }

            let newState = [...state];
            let old = state.find(prod => prod.id === product.id);
            if(old){
                product.count = old.count + 1;
                let i = newState.indexOf(old);
                newState[i] = product;
                return newState;
            }

            product.count = 1;
            return [...state, product];
        }

        case CLEAR_CART :
            return [];

        case REMOVE_PRODUCT_FROM_CART: {
            let newState = [...state];
            let product = newState.find(product => product.id === action.product.id);
            if (product.count === 1)
                return newState.filter(prod => prod !== product);
            product.count--;
            return newState;
        }

        case REMOVE_PRODUCT_TYPE_FROM_CART: {
            return [...state].filter(product => product.id !== action.product.id)
        }

        default:
            return state;
    }
};