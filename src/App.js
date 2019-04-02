import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import {Provider} from "react-redux";
import {store} from "./store";
import CartContainer from "./components/containers/cart/CartContainer";
import ProductsContainer from "./components/containers/products/ProductsContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={ProductsContainer}/>
                                <Route exact path="/cart" component={CartContainer}/>
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
