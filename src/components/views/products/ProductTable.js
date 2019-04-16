import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import ProductTableHead from "./ProductTableHead";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
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