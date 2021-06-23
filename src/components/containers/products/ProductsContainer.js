import React from 'react';
import {connect} from "react-redux";

import * as productAction from "../../../actions/productsActions";
import * as cartAction from "../../../actions/cartActions";
import Products from "../../views/products/Products";

function ProductsContainer(props) {
    return (
        <Products {...props}/>
    );
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