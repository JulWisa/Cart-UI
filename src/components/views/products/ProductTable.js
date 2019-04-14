import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import ProductRow from "./ProductRow";
import ProductTableHead from "./ProductTableHead";

class ProductTable extends React.Component {
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