import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import RemoveIcon from "../../../../node_modules/@material-ui/icons/Remove";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

class CartRow extends Component {
    render() {
        let product = this.props.product;
        let price = RUB_FORMATTER(product.price * product.count);
        return (
            <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button onClick={this.props.onRemoveProduct}>
                        <RemoveIcon/>
                    </Button>
                </TableCell>
                <TableCell>
                    <Button onClick={this.props.onRemoveProductType}>
                        Удалить все
                    </Button>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;
