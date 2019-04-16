import React, {Component} from 'react';
import {connect} from "react-redux";

import * as action from "../../../actions/actions";
import Products from "../../views/products/Products";

class ProductsContainer extends Component{
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
        onAddProduct: (product) => {dispatch(action.addProduct(product))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);