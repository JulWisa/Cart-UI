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
                               onRemoveProduct={product => this.props.onRemoveProduct(product)}
                               onRemoveProductType={product => this.props.onRemoveProductType(product)}/>
            </Table>
        );
    }
}

export default CartTable;