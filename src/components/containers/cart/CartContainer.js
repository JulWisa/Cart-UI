import React, {Component} from "react";
import {connect} from "react-redux";

import Cart from "../../views/cart/Cart";
import * as action from "../../../actions/actions";

class CartContainer extends Component{
    render() {
        return (
            <Cart {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onClearCart: cart => dispatch(action.clearCart(cart)),
        onRemoveProduct: product => dispatch(action.removeProduct(product)),
        onRemoveProductType: product => dispatch(action.removeProductType(product))
    };
};

const mapStateToProps = function (store) {
    return {
        cart: store.cartState,
        products: store.productsState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);