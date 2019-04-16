import actionType from "../constants/actionTypes";

const initialState = [
    {id: 0, name: "Яблоко", price: 86, count: 0},
    {id: 1, name: "Томат", price: 109, count: 4},
    {id: 2, name: "Морковь", price: 39, count: 7},
    {id: 3, name: "Апельсин", price: 73, count: 3},
    {id: 4, name: "Лимон", price: 52, count: 5}];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT_TO_CART :{
            if (action.product.count === 0) return state;
            let product = Object.assign({}, action.product);
            product.count--;
            let newState = [...state];
            let i = newState.indexOf(action.product);
            newState[i] = product;
            return newState;
        }
        case actionType.REMOVE_PRODUCT_FROM_CART: {
            let newState = [...state];
            let product = Object.assign({}, action.product);
            let oldProduct = newState.find(prod => prod.id === product.id);
            if (oldProduct){
                let product = Object.assign({}, oldProduct);
                product.count++;
                let i = newState.indexOf(oldProduct);
                newState[i] = product;
                return newState;
            }
            product.count = 1;
            newState.push(product);
            return newState;
        }
        case actionType.REMOVE_PRODUCT_TYPE_FROM_CART:{
            let newState = [...state];
            let product = newState.find(product => product.id === action.product.id);
            product.count += action.product.count;
            return newState;
        }
        case actionType.CLEAR_CART:{
            let newState = [...state];
            action.cart.forEach(cartElement =>
                newState.find(product => cartElement.id === product.id).count += cartElement.count);
            return newState;
        }
        default: return state;
    }
};