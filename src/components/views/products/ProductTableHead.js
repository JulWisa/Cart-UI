import React from 'react';
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import TableHead from "../../../../node_modules/@material-ui/core/TableHead/TableHead";

class ProductTableHead extends React.Component{
    render() {
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
}

export default ProductTableHead;