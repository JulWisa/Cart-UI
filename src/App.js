import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Cart from "./components/views/cart/Cart";
import {Provider} from "react-redux";
import {store} from "./store";
import Products from "./components/views/products/Products";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Products}/>
                                <Route exact path="/cart" component={Cart}/>
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
