import actionType from "../constants/actionTypes";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT_TO_CART: {
            let id = action.product.id;
            let count = action.product.count;

            if(count === 0) return state;

            if (state.length === 0) {
                return [{id, count: 1}];
            }

            let newState = [...state];
            let oldElement = newState.find(el => el.id === id);
            if (!!oldElement){
                oldElement.count++;
                return newState;
            }

            newState.push({id, count: 1});
            return newState;
        }

        case actionType.CLEAR_CART :
            return [];

        case actionType.REMOVE_PRODUCT_FROM_CART: {
            let newState = [...state];
            let product = newState.find(product => product.id === action.product.id);
            if (product.count === 1)
                return newState.filter(prod => prod !== product);
            product.count--;
            return newState;
        }

        case actionType.REMOVE_PRODUCT_TYPE_FROM_CART: {
            return [...state].filter(product => product.id !== action.product.id)
        }

        default:
            return state;
    }
};