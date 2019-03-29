import React from 'react';
import TableHead from "../../../node_modules/@material-ui/core/TableHead/TableHead";
import TableRow from "../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../node_modules/@material-ui/core/TableCell/TableCell";
import TableBody from "../../../node_modules/@material-ui/core/TableBody/TableBody";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import RemoveIcon from "../../../node_modules/@material-ui/icons/Remove";
import Table from "../../../node_modules/@material-ui/core/Table/Table";

class CartTable extends React.Component{
    render(){
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell>Стоимость</TableCell>
                        <TableCell>Количество</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.cart.map(product =>
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.count}</TableCell>
                            <TableCell>
                                <Button>
                                    <RemoveIcon/>
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button>Удалить все</Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default CartTable;