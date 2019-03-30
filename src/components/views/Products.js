import React from 'react';
import ProductTable from "./ProductTable";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';

class Products extends React.Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products}/>
                <Button id="cartButton" component={Link} to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;