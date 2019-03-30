import React from 'react';
import ProductTable from "./ProductTable";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.onAddProduct = this.onAddProduct.bind(this);
    }

    onAddProduct(product){
        this.props.onAddProduct(product);
    };

    render() {
        return (
            <div>
                <ProductTable products={this.props.products} onAddProduct={this.onAddProduct}/>
                <Button id="cartButton" component={Link} to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;