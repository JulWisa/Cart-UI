import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

import ProductTable from "./ProductTable";

class Products extends Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products}
                              onAddProduct={product => this.props.onAddProduct(product)}/>
                <Button className="cartButton" component={Link} to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;