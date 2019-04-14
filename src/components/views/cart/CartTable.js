import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import CartTableHead from "./CartTableHead";
import CartTableBody from "./CartTableBody";

class CartTable extends React.Component {
    render() {
        return (
            <Table>
                <CartTableHead/>
                <CartTableBody cart={this.props.cart}
                               onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                               onRemoveCartProduct={product => this.props.onRemoveCartProduct(product)}/>
            </Table>
        );
    }
}

export default CartTable;