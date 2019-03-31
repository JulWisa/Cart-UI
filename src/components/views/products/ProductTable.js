import React from 'react';
import Table from "../../../../node_modules/@material-ui/core/Table/Table";
import TableBody from "../../../../node_modules/@material-ui/core/TableBody/TableBody";
import ProductTableHead from "./ProductTableHead";
import ProductRowContainer from "../../containers/ProductRowContainer";

class ProductTable extends React.Component {
    render() {
        return (
            <Table>
                <ProductTableHead/>
                <TableBody>
                    {this.props.products.map(product =>
                        <ProductRowContainer key={product.id} product={product}/>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;