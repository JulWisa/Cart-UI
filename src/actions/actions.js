import actionType from "../constants/actionTypes";

export function addProduct(product){
    return{
        type: actionType.ADD_PRODUCT_TO_CART,
        product
    }
}

export function clearCart(cart){
    return{
        type: actionType.CLEAR_CART,
        cart
    }
}

export function removeProduct(product){
    return{
        type: actionType.REMOVE_PRODUCT_FROM_CART,
        product
    }
}

export function removeProductType(product){
    return{
        type: actionType.REMOVE_PRODUCT_TYPE_FROM_CART,
        product
    }
}