import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

class CartTableHead extends Component{
    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Стоимость</TableCell>
                    <TableCell>Количество</TableCell>
                    <TableCell colSpan={2}></TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default CartTableHead;