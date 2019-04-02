import Layout from "./components/layouts/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductsContainer from "./components/containers/products/ProductsContainer";
import CartContainer from "./components/containers/cart/CartContainer";
import React from "react";

export default (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={ProductsContainer}/>
                <Route exact path="/cart" component={CartContainer}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)