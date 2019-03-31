import React from 'react';
import {connect} from "react-redux";
import ProductTable from "../views/products/ProductTable";

class ProductTableContainer extends React.Component{
    render() {
        return (
            <ProductTable products={this.props.products}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        products: store.productsState
    }
};

export default connect(mapStateToProps)(ProductTableContainer);