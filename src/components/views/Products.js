import React from 'react';
import ProductTable from "./ProductTable";

class Products extends React.Component {
    render() {
        return (
            <ProductTable products={this.props.products}/>
        );
    }
}

export default Products;