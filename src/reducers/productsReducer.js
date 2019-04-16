import actionType from "../constants/productsActionTypes";

const initialState = [
    {id: 0, name: "Яблоко", price: 86, count: 0},
    {id: 1, name: "Томат", price: 109, count: 4},
    {id: 2, name: "Морковь", price: 39, count: 7},
    {id: 3, name: "Апельсин", price: 73, count: 3},
    {id: 4, name: "Лимон", price: 52, count: 5}];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.DECREASE_PRODUCT_COUNT :{
            if (action.product.count <= 0) return state;

            let product = {...action.product};
            product.count--;
            let newState = [...state];
            let i = newState.indexOf(action.product);
            newState[i] = product;
            return newState;
        }

        case actionType.INCREASE_PRODUCT_COUNT: {
            let count = action.cartElement.count ? action.cartElement.count : 1;
            let newState = [...state];
            let product = newState.find(product => product.id === action.cartElement.id);
            product.count += count;
            return newState;
        }

        case actionType.ADD_ALL_PRODUCTS_FROM_CART:{
            let newState = [...state];
            action.cart.forEach(cartElement =>
                newState.find(product => cartElement.id === product.id).count += cartElement.count);
            return newState;
        }
        default: return state;
    }
};