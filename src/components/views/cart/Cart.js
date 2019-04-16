import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CartTable from "./CartTable";

class Cart extends Component {
    render() {
        return (
            <div>
                <Typography variant="h5" className="headline">Корзина</Typography>
                <CartTable cart={this.props.cart}
                           products={this.props.products}
                           onRemoveProduct={id => this.props.onRemoveProduct(id)}
                           onRemoveProductType={id => this.props.onRemoveProductType(id)}/>
                <Button component={Link} to="/" className="cartButton">
                    Перейти в список товаров
                </Button>
                <Button onClick={() => this.props.onClearCart(this.props.cart)}>
                    Очистить корзину
                </Button>
            </div>
        );
    }
}

export default Cart;