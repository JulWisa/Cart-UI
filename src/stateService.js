export function initiateState() {
    return {
        products: [
            {id: 0, name: "Яблоко", price: 86, count: 0},
            {id: 1, name: "Томат", price: 109, count: 4},
            {id: 2, name: "Морковь", price: 39, count: 7},
            {id: 3, name: "Апельсин", price: 73, count: 68},
            {id: 4, name: "Лимон", price: 52, count: 33}
        ],
        cart: []
    }
}

export function clearCart(state) {
    let cartCopy = [...state.cart];
    let products = state.products;
    cartCopy.forEach(product => {
        products = getArrayWithProducts(products, product, product.count)
    });

    return {cart: [], products};
}

export function addProductToCart(state, product) {
    let cart = getArrayWithProducts(state.cart, product, 1);
    let products = getArrayWithoutProduct(state.products, product);

    return {cart, products};
}

export function removeProductTypeFromCart(state, productId) {
    let cart = state.cart.filter(product => product.id !== productId);

    let prod = state.cart.find(prod => prod.id === productId);
    let products = getArrayWithProducts(state.products, prod, prod.count);

    return {cart, products};
}

export function removeProductFromCart(state, product) {
    let cart = getArrayWithoutProduct(state.cart, product);
    let products = getArrayWithProducts(state.products, product, 1);

    return {cart, products};
}

function getArrayWithProducts(arr, product, count) {
    if (product.count === 0) return arr;

    let productCopy = Object.assign({}, product);
    if (arr.length === 0) {
        productCopy.count = 1;
        return [productCopy];
    }

    let array = [...arr];
    let oldProduct = array.find(prod => prod.id === product.id);
    if (!!oldProduct) {
        let i = array.indexOf(oldProduct);
        productCopy.count = oldProduct.count + count;
        array[i] = productCopy;
        return array;
    }

    productCopy.count = 1;
    return [...arr, productCopy];
}

function getArrayWithoutProduct(arr, product) {
    if (product.count === 0) return arr;
    let array = [...arr];
    product = array.find(prod => prod.id === product.id);
    let productCopy = Object.assign({}, product);
    productCopy.count--;
    let i = array.indexOf(product);
    array[i] = productCopy;
    return array;
}
