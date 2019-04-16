import actionType from "../constants/cartActionTypes";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_CART_ELEMENT: {
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

        case actionType.REMOVE_CART_ELEMENT: {
            let newState = [...state];
            let product = newState.find(product => product.id === action.id);
            if (product.count === 1)
                return newState.filter(prod => prod !== product);

            product.count--;
            return newState;
        }

        case actionType.REMOVE_CART_ELEMENT_TYPE: {
            return state.filter(product => product.id !== action.id)
        }

        case actionType.CLEAR_CART :
            return [];

        default:
            return state;
    }
};