import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

import ProductTable from "./ProductTable";

class Products extends Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products}
                              onAddProduct={productId => this.props.onAddProduct(productId)}/>
                <Button className="cartButton"
                        component={Link}
                        to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;