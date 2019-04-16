import React, {Component} from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

class ProductRow extends Component{
    render(){
        let product = this.props.product;
        return(
            <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{RUB_FORMATTER(product.price)}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button onClick={this.props.onAddProduct}>
                        <AddIcon/>
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}

export default ProductRow;