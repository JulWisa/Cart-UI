import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_TYPE_FROM_CART} from "./action-types";

export function addProduct(product){
    return{
        type: ADD_PRODUCT_TO_CART,
        product
    }
}

export function clearCart(cart){
    return{
        type: CLEAR_CART,
        cart
    }
}

export function removeProduct(product){
    return{
        type: REMOVE_PRODUCT_FROM_CART,
        product
    }
}

export function removeProductType(product){
    return{
        type: REMOVE_PRODUCT_TYPE_FROM_CART,
        product
    }
}