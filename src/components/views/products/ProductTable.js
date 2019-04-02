import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import ProductTableHead from "./ProductTableHead";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        return (
            <Table>
                <ProductTableHead/>
                <TableBody>
                    {this.props.products.map(product =>
                        <ProductRow product={product}
                                    onAddProduct={() => this.props.onAddProduct(product)}
                                    key={product.id}/>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;