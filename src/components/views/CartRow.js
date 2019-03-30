import React from 'react';
import TableRow from "../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../node_modules/@material-ui/core/TableCell/TableCell";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import RemoveIcon from "../../../node_modules/@material-ui/icons/Remove";

class CartRow extends React.Component{
    render() {
        let product = this.props.product;
        return (
            <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price * product.count}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button>
                        <RemoveIcon/>
                    </Button>
                </TableCell>
                <TableCell>
                    <Button>Удалить все</Button>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;