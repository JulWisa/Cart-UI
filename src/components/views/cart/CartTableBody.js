import React, {Component} from 'react';
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import TotalRow from "./TotalRow";
import CartRow from "./CartRow";

class CartTableBody extends Component {
    getBody() {
        if (this.props.cart.length > 0)
            return this.props.cart.map(product =>
                <CartRow
                    product={product}
                    onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                    onRemoveCartProduct={product => this.props.onRemoveCartProduct(product)}
                    key={product.id}/>);
        return (
            <TableRow>
                <TableCell id="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
    }

    render() {
        return (
            <TableBody>
                {this.getBody()}
                <TotalRow cart={this.props.cart}/>
            </TableBody>
        );
    }
}

export default CartTableBody;