import {ADD_PRODUCT} from "../actions/action-types";

const initialState = [
    {id: 3, name: "Апельсин", price: 73, count: 1},
    {id: 4, name: "Лимон", price: 52, count: 2}];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
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
        };
        default:
            return state;
    }
};