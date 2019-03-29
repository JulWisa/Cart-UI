import React from 'react';
import Table from "../../../node_modules/@material-ui/core/Table/Table";
import TableHead from "../../../node_modules/@material-ui/core/TableHead/TableHead";
import TableBody from "../../../node_modules/@material-ui/core/TableBody/TableBody";
import TableRow from "../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../node_modules/@material-ui/core/TableCell/TableCell";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import AddIcon from "../../../node_modules/@material-ui/icons/Add"

class ProductTable extends React.Component {
    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Количество</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.products.map(product =>
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.count}</TableCell>
                            <TableCell>
                                <Button>
                                    <AddIcon/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;