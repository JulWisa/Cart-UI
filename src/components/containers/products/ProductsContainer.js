import React from 'react';
import {connect} from "react-redux";
import {addProduct} from "../../../actions/actions";
import Products from "../../views/products/Products";

class ProductsContainer extends React.Component{
    render() {
        return (
            <Products {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);