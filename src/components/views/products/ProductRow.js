import React from 'react';
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import AddIcon from "../../../../node_modules/@material-ui/icons/Add";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import {RUB_FORMATTER} from "../../../consants/numberFormatters";

class ProductRow extends React.Component{
    onAddProduct(){
        let product = Object.assign({}, this.props.product);
        this.props.onAddProduct(product);
    };

    render(){
        let product = this.props.product;
        return(
            <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{RUB_FORMATTER(product.price)}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button onClick={() => this.onAddProduct()}>
                        <AddIcon/>
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}

export default ProductRow;