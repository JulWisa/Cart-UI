import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT, REMOVE_PRODUCT_TYPE} from "./action-types";

//cart, products
export function addProduct(product){
    return{
        type: ADD_PRODUCT_TO_CART,
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

export function removeProductType(productId){
    return{
        type: REMOVE_PRODUCT_TYPE,
        productId
    }
}