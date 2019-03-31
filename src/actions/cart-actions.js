import {ADD_PRODUCT} from "./action-types";

export function addProduct(product){
    return{
        type: ADD_PRODUCT,
        product
    }
}