import React from 'react';
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import {RUB_FORMATTER} from "../../../common/numberFormatters";
import RemoveProductButton from "./RemoveProductButton";
import RemoveProductTypeButton from "./RemoveProductTypeButton";

class CartRow extends React.Component {
    render() {
        let product = this.props.product;
        let price = RUB_FORMATTER(product.price * product.count);
        return (
            <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <RemoveProductButton onRemoveProduct={this.props.onRemoveProduct}/>
                </TableCell>
                <TableCell>
                    <RemoveProductTypeButton onRemoveProductType={this.props.onRemoveProductType}/>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;