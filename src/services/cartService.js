export function getCartWithProducts(cart, id, count){
    if (count === undefined) count = 1;
    let oldElement = cart.find(cartElement => cartElement.id === id);
    if (oldElement){
        let productCopy = {...oldElement};
        let i = cart.indexOf(oldElement);
        productCopy.count = oldElement.count + count;
        cart[i] = productCopy;
        return [...cart];
    }
    return [...cart, {id, count}];
}

export function getCartWithoutProduct(cart, id) {
    let result = [...cart];
    let product = cart.find(product => product.id === id);
    if (product.count === 1){
        result.remove(product);
        return result;
    }
    product.count--;
    return result;
}

export function getCartWithoutProductType(cart, id) {
    let result = [...cart];
    return result.filter(product => product.id !== id);
}
