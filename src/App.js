import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./components/views/products/Products";
import Layout from "./components/layouts/Layout";
import Cart from "./components/views/cart/Cart";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 0, name: "Яблоко", price: 86, count: 0},
                {id: 1, name: "Томат", price: 109, count: 4},
                {id: 2, name: "Морковь", price: 39, count: 7},
                {id: 3, name: "Апельсин", price: 73, count: 68},
                {id: 4, name: "Лимон", price: 52, count: 33}
            ],
            cart: []
        };

        this.onClearCart = this.onClearCart.bind(this);
        this.onAddProduct = this.onAddProduct.bind(this);
        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
        this.onRemoveCartProduct = this.onRemoveCartProduct.bind(this);
    }

    onClearCart() {
        let cartCopy = [...this.state.cart];
        let products = this.state.products;
        cartCopy.forEach(product => {
            products = this.getArrayWithProducts(products, product)
        });
        this.setState({cart: [], products});
    }

    onAddProduct(product) {
        let cart = this.getArrayWithProduct(this.state.cart, product);
        let products = this.getArrayWithoutProduct(this.state.products, product);

        this.setState({cart, products});
    };

    getArrayWithProduct(arr, product) {
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
            productCopy.count = oldProduct.count + 1;
            array[i] = productCopy;
            return array;
        }

        productCopy.count = 1;
        return [...arr, productCopy];
    }

    getArrayWithProducts(arr, product) {
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
            productCopy.count = oldProduct.count + product.count;
            array[i] = productCopy;
            return array;
        }

        productCopy.count = 1;
        return [...arr, productCopy];
    }

    getArrayWithoutProduct(arr, product) {
        if (product.count === 0) return arr;
        let array = [...arr];
        product = array.find(prod => prod.id === product.id);
        let productCopy = Object.assign({}, product);
        productCopy.count--;
        let i = array.indexOf(product);
        array[i] = productCopy;
        return array;
    }

    onRemoveCartRow(productId) {
        let cart = this.state.cart.filter(product => product.id !== productId);

        let prod = this.state.cart.find(prod => prod.id === productId);
        let products = this.getArrayWithProducts(this.state.products, prod);

        this.setState({cart, products});
    }

    onRemoveCartProduct(product) {
        let cart = this.getArrayWithoutProduct(this.state.cart, product);
        let products = this.getArrayWithProduct(this.state.products, product);

        this.setState({cart, products});
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/"
                                   render={() =>
                                       <Products products={this.state.products}
                                                 onAddProduct={this.onAddProduct}/>}
                            />
                            <Route exact path="/cart"
                                   render={() =>
                                       <Cart cart={this.state.cart}
                                             onClearCart={this.onClearCart}
                                             onRemoveCartRow={this.onRemoveCartRow}
                                             onRemoveCartProduct={this.onRemoveCartProduct}/>}
                            />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
