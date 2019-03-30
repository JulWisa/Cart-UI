import React from 'react';
import CartTable from "./CartTable";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <CartTable cart={this.props.cart}/>
                <Button component={Link} to="/" id="productsBtn">
                    Перейти в список товаров
                </Button>
            </div>
        );
    }
}

export default Cart;