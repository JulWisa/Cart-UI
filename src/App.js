import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./components/views/products/Products";
import Layout from "./components/layouts/Layout";
import Cart from "./components/views/cart/Cart";
import stateService from "./stateService";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = stateService.initiateState();

        this.onClearCart = this.onClearCart.bind(this);
        this.onAddProduct = this.onAddProduct.bind(this);
        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
        this.onRemoveCartProduct = this.onRemoveCartProduct.bind(this);
    }

    onClearCart() {
        this.setState(stateService.clearCart(this.state));
    }

    onAddProduct(product) {
        this.setState(stateService.addProductToCart(this.state, product));
    };


    onRemoveCartRow(productId) {
        this.setState(stateService.removeProductTypeFromCart(this.state, productId));
    }

    onRemoveCartProduct(product) {
        this.setState(stateService.removeProductFromCart(this.state, product));
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
