import React from 'react';
import CartTable from "./CartTable";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import Typography from "../../../../node_modules/@material-ui/core/Typography/Typography";
import ClearCartButton from "./ClearCartButton";

class Cart extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h5" id="headline">Корзина</Typography>
                <CartTable cart={this.props.cart}
                           onRemoveProduct={product => this.props.onRemoveProduct(product)}
                           onRemoveProductType={product => this.props.onRemoveProductType(product)}/>
                <Button component={Link} to="/" id="productsBtn">
                    Перейти в список товаров
                </Button>
                <ClearCartButton onClearCart={() => this.props.onClearCart(this.props.cart)}/>
            </div>
        );
    }
}

export default Cart;