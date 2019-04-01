import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT, REMOVE_PRODUCT_TYPE} from "../actions/action-types";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            if (action.product.count <= 0) return state;
            let newState = [...state];
            if (newState.length > 0) {
                let old = newState.find(prod => prod.id === action.product.id);
                if (old) {
                    if (action.product.count === old.count) {
                        return state;
                    }
                    let i = newState.indexOf(old);
                    newState[i].count++;
                    return newState;
                }
            }
            let product = Object.assign({}, action.product);
            product.count = 1;
            return [...state, product];
        }

        case CLEAR_CART :
            return [];

        case REMOVE_PRODUCT: {
            let newState = [...state];
            let product = newState.find(product => product.id === action.productId);
            if (product.count === 1)
                return newState.filter(prod => prod !== product);
            product.count--;
            return newState;
        }

        case REMOVE_PRODUCT_TYPE: {
            return [...state].filter(product => product.id !== action.productId)
        }

        default:
            return state;
    }
};