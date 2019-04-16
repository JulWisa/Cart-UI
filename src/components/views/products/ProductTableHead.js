import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

class ProductTableHead extends Component{
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