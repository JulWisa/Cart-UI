import React, {Component} from 'react';
import {connect} from "react-redux";

import * as productAction from "../../../actions/productsActions";
import * as cartAction from "../../../actions/cartActions";
import Products from "../../views/products/Products";

class ProductsContainer extends Component {
    render() {
        return (
            <Products {...this.props}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        products: store.productsState
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        onAddProduct: product => {
            dispatch(productAction.decreaseProductCount(product));
            dispatch(cartAction.addCartElement(product));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);