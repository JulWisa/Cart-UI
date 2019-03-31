import {ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT} from "./action-types";

export function addProduct(product){
    return{
        type: ADD_PRODUCT,
        product
    }
}

export function clearCart(payload){
    return{
        type: CLEAR_CART,
        payload
    }
}

export function removeProduct(productId){
    return{
        type: REMOVE_PRODUCT,
        productId
    }
}