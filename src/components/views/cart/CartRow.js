import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import RemoveIcon from "../../../../node_modules/@material-ui/icons/Remove";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

function CartRow(props) {
    let product = props.product;
    let price = RUB_FORMATTER(product.price * product.count);
    return (
        <TableRow>
            <TableCell>{product.name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>
                <Button onClick={props.onRemoveProduct}>
                    <RemoveIcon/>
                </Button>
            </TableCell>
            <TableCell>
                <Button onClick={props.onRemoveProductType}>
                    Удалить все
                </Button>
            </TableCell>
        </TableRow>);
}

export default CartRow;
