import React from 'react';
import {connect} from "react-redux";
import ProductTable from "../../views/products/ProductTable";
import {addProduct} from "../../../actions/cart-actions";

class ProductTableContainer extends React.Component{
    render() {
        return (
            <ProductTable products={this.props.products} onAddProduct={this.props.onAddProduct}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        products: store.productsState
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        onAddProduct: (product) => {dispatch(addProduct(product))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableContainer);