import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CartTable from "./CartTable";

class Cart extends Component {
    render() {
        return (
            <div>
                <Typography variant="h5" id="headline">Корзина</Typography>
                <CartTable cart={this.props.cart}
                           onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                           onRemoveCartProduct={product => this.props.onRemoveCartProduct(product)}/>
                <Button component={Link} to="/" id="productsBtn">
                    Перейти в список товаров
                </Button>
                <Button onClick={this.props.onClearCart}>
                    Очистить корзину
                </Button>
            </div>
        );
    }
}

export default Cart;