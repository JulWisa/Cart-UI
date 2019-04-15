import * as productsService from "./productsService";
import * as cartService from "./cartService";

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
    let products = productsService.getProductsStateWithProducts(state.products, state.cart);
    return {cart: [], products};
}

export function addProductToCart(state, productId) {
    if(state.products.find(product => product.id === productId).count <= 0) return state;

    let cart = cartService.getCartWithProducts(state.cart, productId);
    let products = productsService.getProductsStateWithoutProducts(state.products, productId);
    return {cart, products};
}

export function removeProductTypeFromCart(state, productId) {
    let remaining = state.cart.find(prod => prod.id === productId).count;
    let cart = cartService.getCartWithoutProductType(state.cart, productId);
    let products = productsService.getProductsStateWithProduct(state.products, productId, remaining);
    return {cart, products};
}

export function removeProductFromCart(state, productId) {
    if (state.cart.find(cartElement => cartElement.id === productId).count === 1) return removeProductTypeFromCart(state, productId);

    let cart = cartService.getCartWithoutProduct(state.cart, productId);
    let products = productsService.getProductsStateWithProduct(state.products, productId);
    return {cart, products};
}
