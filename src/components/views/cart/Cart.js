import React from 'react';
import CartTable from "./CartTable";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import Typography from "../../../../node_modules/@material-ui/core/Typography/Typography";

class Cart extends React.Component{
    constructor(props){
        super(props);

        this.onClearCart = this.onClearCart.bind(this);
        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
    }

    onClearCart(){
        this.props.onClearCart();
    }

    onRemoveCartRow(productId){
        this.props.onRemoveCartRow(productId);
    }

    render(){
        return(
            <div>
                <Typography variant="h5" id="headline">Корзина</Typography>
                <CartTable cart={this.props.cart} onRemoveCartRow={this.onRemoveCartRow}/>
                <Button component={Link} to="/" id="productsBtn">
                    Перейти в список товаров
                </Button>
                <Button onClick={() => this.onClearCart()}>
                    Очистить корзину
                </Button>
            </div>
        );
    }
}

export default Cart;