import React, {Component} from 'react';
import Table from "@material-ui/core/Table";

import CartTableHead from "./CartTableHead";
import CartTableBody from "./CartTableBody";

class CartTable extends Component {
    render() {
        return (
            <Table>
                <CartTableHead/>
                <CartTableBody cart={this.props.cart}
                               products={this.props.products}
                               onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                               onRemoveCartProduct={productId => this.props.onRemoveCartProduct(productId)}/>
            </Table>
        );
    }
}

export default CartTable;