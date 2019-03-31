import React from 'react';
import TableHead from "../../../../node_modules/@material-ui/core/TableHead/TableHead";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import Typography from "../../../../node_modules/@material-ui/core/Typography/Typography";
import CartRow from "./CartRow";

class CartTable extends React.Component {
    constructor(props) {
        super(props);

        this.getTableBody = this.getTableBody.bind(this);
        this.fillTable = this.fillTable.bind(this);
        this.onRemoveCartRow = this.onRemoveCartRow.bind(this);
    }

    getTableBody(products) {
        let total = products.reduce((sum, product) => sum + product.price * product.count, 0);
        return (
            <TableBody>
                {this.fillTable(products)}
                <TableRow>
                    <TableCell colSpan={5}>
                        <Typography variant="overline">Всего: {total}</Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }

    fillTable(products) {
        if (products.length > 0)
            return products.map(product =>
                <CartRow
                    product={product}
                    onRemoveCartRow={this.onRemoveCartRow}
                    key={product.id}/>);
        return (
            <TableRow>
                <TableCell id="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
    }

    onRemoveCartRow(productId){
        this.props.onRemoveCartRow(productId);
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell>Стоимость</TableCell>
                        <TableCell>Количество</TableCell>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                </TableHead>
                {this.getTableBody(this.props.cart)}
            </Table>
        );
    }
}

export default CartTable;