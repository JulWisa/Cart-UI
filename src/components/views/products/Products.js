import React from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

import ProductTable from "./ProductTable";

function Products(props) {
    return (
        <div>
            <ProductTable products={props.products}
                          onAddProduct={product => props.onAddProduct(product)}/>
            <Button className="cartButton" component={Link} to="/cart">Корзина</Button>
        </div>

    );
}

export default Products;