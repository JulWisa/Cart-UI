import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import CartTableHead from "./CartTableHead";
import CartTableBody from "./CartTableBody";

class CartTable extends React.Component {
    constructor(props) {
        super(props);

        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
        this.onRemoveCartProduct = this.onRemoveCartProduct.bind(this);
    }

    onRemoveCartRow(productId){
        this.props.onRemoveCartRow(productId);
    }

    onRemoveCartProduct(product){
        this.props.onRemoveCartProduct(product);
    }

    render() {
        return (
            <Table>
                <CartTableHead/>
                <CartTableBody cart={this.props.cart}
                               onRemoveCartRow={this.onRemoveCartRow}
                               onRemoveCartProduct={this.onRemoveCartProduct}/>
            </Table>
        );
    }
}

export default CartTable;