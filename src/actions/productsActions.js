import actionType from "../constants/productsActionTypes";

export function decreaseProductCount(product){
    return{
        type: actionType.DECREASE_PRODUCT_COUNT,
        product
    }
}

export function increaseProductCount(cartElement){
    return{
        type: actionType.INCREASE_PRODUCT_COUNT,
        cartElement
    }
}

export function addAllProductsFromCart(cart){
    return{
        type: actionType.ADD_ALL_PRODUCTS_FROM_CART,
        cart
    }
}