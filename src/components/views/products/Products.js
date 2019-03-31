import React from 'react';
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import ProductTableContainer from "../../containers/ProductTableContainer";

class Products extends React.Component {
    render() {
        return (
            <div>
                <ProductTableContainer/>
                <Button id="cartButton" component={Link} to="/cart">Корзина</Button>
            </div>

        );
    }
}

export default Products;