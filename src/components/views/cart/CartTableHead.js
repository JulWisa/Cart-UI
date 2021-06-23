import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

function CartTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Стоимость</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell colSpan={2}/>
            </TableRow>
        </TableHead>
    );
}

export default CartTableHead;