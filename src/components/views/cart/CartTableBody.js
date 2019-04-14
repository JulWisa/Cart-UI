import React from 'react';
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import TotalRow from "./TotalRow";
import CartRow from "./CartRow";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";

class CartTableBody extends React.Component {
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