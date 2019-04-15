export function getProductsStateWithoutProducts(products, id) {
    let result = [...products];
    let product = result.find(product => product.id === id);
    product.count--;
    return result;
}

export function getProductsStateWithProduct(products, id, count) {
    if (count === undefined) count = 1;
    let result = [...products];
    let product = result.find(product => product.id === id);
    product.count += count;
    return result;
}

export function getProductsStateWithProducts(products, cart) {
    let result = [...products];
    cart.forEach(cartElement =>
        result.find(product => cartElement.id === product.id).count += cartElement.count);
    return result;
}
