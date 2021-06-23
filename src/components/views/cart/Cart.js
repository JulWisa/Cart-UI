import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CartTable from "./CartTable";

function Cart(props) {
    return (
        <div>
            <Typography variant="h5" className="headline">Корзина</Typography>
            <CartTable cart={props.cart}
                       products={props.products}
                       onRemoveProduct={id => props.onRemoveProduct(id)}
                       onRemoveProductType={id => props.onRemoveProductType(id)}/>
            <Button component={Link} to="/" className="cartButton">
                Перейти в список товаров
            </Button>
            <Button onClick={() => props.onClearCart(props.cart)}>
                Очистить корзину
            </Button>
        </div>
    );
}

export default Cart;