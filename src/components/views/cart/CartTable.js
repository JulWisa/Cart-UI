import React from 'react';
import Table from "@material-ui/core/Table";

import CartTableHead from "./CartTableHead";
import CartTableBody from "./CartTableBody";

function CartTable(props) {
    return (
        <Table>
            <CartTableHead/>
            <CartTableBody cart={props.cart}
                           products={props.products}
                           onRemoveProduct={id => props.onRemoveProduct(id)}
                           onRemoveProductType={id => props.onRemoveProductType(id)}/>
        </Table>
    );
}

export default CartTable;