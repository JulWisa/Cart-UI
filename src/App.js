import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Products from "./components/views/Products";
import Layout from "./components/layouts/Layout";
import CartTable from "./components/views/CartTable";

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
                {id: 3, name: "Апельсин", price: 73, count: 68},
                {id: 4, name: "Лимон", price: 52, count: 33}
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" render={() => <Products products={this.state.products}/>}/>
                            <Route exact path="/cart" render={() => <CartTable cart={this.state.cart}/>}/>
                        </Switch>
                    </Layout>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;
