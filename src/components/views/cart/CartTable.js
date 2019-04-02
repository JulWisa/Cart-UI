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
                               onRemoveProduct={productId => this.props.onRemoveProduct(productId)}
                               onRemoveProductType={productId => this.props.onRemoveProductType(productId)}/>
            </Table>
        );
    }
}

export default CartTable;