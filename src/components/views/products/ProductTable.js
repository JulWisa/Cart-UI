import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import ProductTableHead from "./ProductTableHead";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    return (
        <Table>
            <ProductTableHead/>
            <TableBody>
                {props.products.map(product =>
                    <ProductRow product={product}
                                onAddProduct={() => props.onAddProduct(product)}
                                key={product.id}/>
                )}
            </TableBody>
        </Table>
    );
}

export default ProductTable;