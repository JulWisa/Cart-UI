import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

class CartRow extends Component {
    onRemoveProduct() {
        if (this.props.product.count === 1)
            this.props.onRemoveCartRow(this.props.product.id);
        else
            this.props.onRemoveCartProduct(this.props.product);
    }

    render() {
        let product = this.props.product;
        let price = RUB_FORMATTER(product.price * product.count);
        return (
            <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button onClick={() => this.onRemoveProduct()}>
                        <RemoveIcon/>
                    </Button>
                </TableCell>
                <TableCell>
                    <Button onClick={() => this.props.onRemoveCartRow(product.id)}>
                        Удалить все
                    </Button>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;