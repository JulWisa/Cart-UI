import {ADD_PRODUCT} from "../actions/action-types";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            if (action.product.count <= 0) return state;

            let newState = [...state];
            if (newState.length > 0) {
                let old = newState.find(prod => prod.id === action.product.id);
                if (old) {
                    if (action.product.count === old.count) {
                        console.log(action.product.count, old.count);
                        return state;
                    }
                    let i = newState.indexOf(old);
                    newState[i].count++;
                    console.log(newState[i].count);
                    return newState;
                }
            }
            let product = Object.assign({}, action.product);
            product.count = 1;
            return [...state, product];
        };
        default:
            return state;
    }
};