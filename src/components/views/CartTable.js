import React from 'react';
import TableHead from "../../../node_modules/@material-ui/core/TableHead/TableHead";
import TableRow from "../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../node_modules/@material-ui/core/TableCell/TableCell";
import TableBody from "../../../node_modules/@material-ui/core/TableBody/TableBody";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import RemoveIcon from "../../../node_modules/@material-ui/icons/Remove";
import Table from "../../../node_modules/@material-ui/core/Table/Table";
import Typography from "../../../node_modules/@material-ui/core/Typography/Typography";

class CartTable extends React.Component {
    constructor(props) {
        super(props);

        this.getTableBody = this.getTableBody.bind(this);
        this.fillTable = this.fillTable.bind(this);
    }

    getTableBody(products) {
        let total = products.reduce((sum, product) => {
            console.log(product.price, sum);
            return sum + product.price
        }, 0);
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
                </TableRow>);

        return (
            <TableRow>
                <TableCell id="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
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