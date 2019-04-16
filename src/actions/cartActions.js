import actionType from "../constants/cartActionTypes";

export function addCartElement(product){
    return{
        type: actionType.ADD_CART_ELEMENT,
        product
    }
}

export function removeCartElement(id){
    return{
        type: actionType.REMOVE_CART_ELEMENT,
        id
    }
}

export function removeCartElementType(id){
    return{
        type: actionType.REMOVE_CART_ELEMENT_TYPE,
        id
    }
}

export function clearCart(){
    return{
        type: actionType.CLEAR_CART
    }
}
