import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import CartTableHead from "./CartTableHead";
import CartTableBodyContainer from "../../containers/cart/CartTableBodyContainer";

class CartTable extends React.Component {
    render() {
        return (
            <Table>
                <CartTableHead/>
                <CartTableBodyContainer/>
            </Table>
        );
    }
}

export default CartTable;