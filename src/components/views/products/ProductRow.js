import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

function ProductRow(props) {
    let product = props.product;
    return (
        <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{RUB_FORMATTER(product.price)}</TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>
                <Button onClick={props.onAddProduct}>
                    <AddIcon/>
                </Button>
            </TableCell>
        </TableRow>
    );

}

export default ProductRow;