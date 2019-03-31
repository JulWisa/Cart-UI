import React from 'react';
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import RemoveIcon from "../../../../node_modules/@material-ui/icons/Remove";

class CartRow extends React.Component{
    constructor(props) {
        super(props);

        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
    }

    onRemoveCartRow(){
        this.props.onRemoveCartRow(this.props.product.id);
    }

    render() {
        let product = this.props.product;
        return (
            <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price * product.count}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <Button>
                        <RemoveIcon/>
                    </Button>
                </TableCell>
                <TableCell>
                    <Button onClick={this.onRemoveCartRow}>Удалить все</Button>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;