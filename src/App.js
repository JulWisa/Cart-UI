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
            cart: [
            ]
        };

        this.onClearCart = this.onClearCart.bind(this);
        this.onAddProduct = this.onAddProduct.bind(this);
    }

    onClearCart() {
        this.setState({cart: []});
    }

    onAddProduct(product) {
        this.setState({cart: this.getCartWithProduct(product)})
    };

    getCartWithProduct(product) {
        let cart = this.state.cart;
        if (product.count <= 0) return cart;
        if (cart.length > 0) {
            let old = cart.find(prod => prod.id === product.id);
            if (old){
                if (product.count === old.count)
                    return cart;
                let i = cart.indexOf(old);
                cart[i].count++;
                return cart;
            }
        }
        product.count = 1;
        cart.push(product);
        return cart;
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
                                             onClearCart={this.onClearCart}/>}
                            />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
