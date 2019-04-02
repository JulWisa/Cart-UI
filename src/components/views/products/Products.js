import React from 'react';
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import ProductTable from "./ProductTable";

class Products extends React.Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products}
                              onAddProduct={product => this.props.onAddProduct(product)}/>
                <Button id="cartButton" component={Link} to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;