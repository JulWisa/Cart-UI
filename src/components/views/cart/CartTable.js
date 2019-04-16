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
                               onRemoveProduct={id => this.props.onRemoveProduct(id)}
                               onRemoveProductType={id => this.props.onRemoveProductType(id)}/>
            </Table>
        );
    }
}

export default CartTable;