import React from 'react';
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import TotalRow from "./TotalRow";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import CartRow from "./CartRow";

class CartTableBody extends React.Component {
    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
    }

    getBody() {
        if (this.props.cart.length > 0)
            return this.props.cart.map(product =>
                <CartRow
                    product={product}
                    onRemoveProduct={() => this.props.onRemoveProduct(product.id)}
                    onRemoveProductType={() => this.props.onRemoveProductType(product.id)}
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