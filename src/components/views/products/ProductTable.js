import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import ProductRow from "./ProductRow";
import ProductTableHead from "./ProductTableHead";

class ProductTable extends Component {
    render() {
        return (
            <Table>
                <ProductTableHead/>
                <TableBody>
                    {this.props.products.map(product =>
                        <ProductRow key={product.id} product={product} onAddProduct={product => this.props.onAddProduct(product)}/>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;