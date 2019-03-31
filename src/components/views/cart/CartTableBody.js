import React from 'react';
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import TotalRow from "./TotalRow";
import CartRow from "./CartRow";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";

class CartTableBody extends React.Component {
    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
        this.onRemoveCartRow= this.onRemoveCartRow.bind(this);
        this.onRemoveCartProduct = this.onRemoveCartProduct.bind(this);
    }

    onRemoveCartRow(productId){
        this.props.onRemoveCartRow(productId);
    }

    onRemoveCartProduct(product){
        this.props.onRemoveCartProduct(product);
    }

    getBody() {
        if (this.props.cart.length > 0)
            return this.props.cart.map(product =>
                <CartRow
                    product={product}
                    onRemoveCartRow={this.onRemoveCartRow}
                    onRemoveCartProduct={this.onRemoveCartProduct}
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