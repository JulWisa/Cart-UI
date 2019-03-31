import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Cart from "./components/views/cart/Cart";
import {Provider} from "react-redux";
import {store} from "./store";
import Products from "./components/views/products/Products";

class App extends Component {
    constructor(props) {
        super(props);

        this.onClearCart = this.onClearCart.bind(this);
        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
        this.onRemoveCartProduct = this.onRemoveCartProduct.bind(this);
    }

    onClearCart() {
        this.setState({cart: []});
    }

    onRemoveCartRow(productId) {
        let cart = this.state.cart.filter(product => product.id !== productId);
        this.setState({cart});
    }

    onRemoveCartProduct(product) {
        let cart = this.state.cart;
        let i = cart.indexOf(product);
        cart[i].count--;
        this.setState({cart});
    }

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/"
                                       render={() => <Products/>}/>
                                <Route exact path="/cart"
                                       render={() =>
                                           <Cart onClearCart={this.onClearCart}
                                                 onRemoveCartRow={this.onRemoveCartRow}
                                                 onRemoveCartProduct={this.onRemoveCartProduct}/>}
                                />
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
