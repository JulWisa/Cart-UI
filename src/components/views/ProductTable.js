import React from 'react';
import Table from "../../../node_modules/@material-ui/core/Table/Table";
import TableHead from "../../../node_modules/@material-ui/core/TableHead/TableHead";
import TableBody from "../../../node_modules/@material-ui/core/TableBody/TableBody";
import TableRow from "../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../node_modules/@material-ui/core/TableCell/TableCell";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.onAddProduct = this.onAddProduct.bind(this);
    }

    onAddProduct(product){
        this.props.onAddProduct(product);
    };

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
                        <ProductRow key={product.id} product={product} onAddProduct={this.onAddProduct}/>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;