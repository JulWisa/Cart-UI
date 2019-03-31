import React from 'react';
import CartTable from "./CartTable";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import Typography from "../../../../node_modules/@material-ui/core/Typography/Typography";
import ClearCartButtonContainer from "../../containers/ClearCartButtonContainer";

class Cart extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h5" id="headline">Корзина</Typography>
                <CartTable/>
                <Button component={Link} to="/" id="productsBtn">
                    Перейти в список товаров
                </Button>
                <ClearCartButtonContainer/>
            </div>
        );
    }
}

export default Cart;