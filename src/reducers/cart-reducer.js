import {ADD_PRODUCT} from "../actions/action-types";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT: return [...state, action.payload];
        default: return state;
    }
};