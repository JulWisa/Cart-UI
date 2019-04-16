import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import ProductsContainer from "./components/containers/products/ProductsContainer";
import CartContainer from "./components/containers/cart/CartContainer";

import Layout from "./components/layouts/Layout";
import {createStore} from "redux";
import {reducers} from "./reducers";

class App extends Component {
    render() {
        const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
