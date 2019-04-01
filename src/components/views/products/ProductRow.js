import React from 'react';
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import {RUB_FORMATTER} from "../../../consants/numberFormatters";
import AddIcon from "../../../../node_modules/@material-ui/icons/Add";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";

class ProductRow extends React.Component{
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