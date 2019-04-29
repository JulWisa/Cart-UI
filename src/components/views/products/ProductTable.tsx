import React from 'react';
import {Table, TableBody} from '@material-ui/core';

// import {Product} from '@models/product';
import ProductRow from './ProductRow';
import ProductTableHead from './ProductTableHead';
import {Product} from "../../../models/product";

interface ProductTableProps {
    products: Product[],
    onAddProduct: (id: number) => void
}

function ProductTable(props: ProductTableProps) {
    return (
        <Table>
            <ProductTableHead/>
            <TableBody>
                {props.products.map(product =>
                    <ProductRow key={product.id} product={product}
                                onAddProduct={productId => props.onAddProduct(productId)}/>
                )}
            </TableBody>
        </Table>
    );
}

export default ProductTable;
