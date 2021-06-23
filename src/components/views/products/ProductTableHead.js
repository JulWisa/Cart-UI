import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

function ProductTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell/>
            </TableRow>
        </TableHead>
    );
}

export default ProductTableHead;