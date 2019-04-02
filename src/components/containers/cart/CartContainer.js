import Cart from "../../views/cart/Cart";
import React from "react";
import {connect} from "react-redux";
import {clearCart, removeProduct, removeProductType} from "../../../actions/actions";

class CartContainer extends React.Component{
    render() {
        return (
            <Cart {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onClearCart: cart => dispatch(clearCart(cart)),
        onRemoveProduct: product => dispatch(removeProduct(product)),
        onRemoveProductType: product => dispatch(removeProductType(product))
    };
};

const mapStateToProps = function (store) {
    return {
        cart: store.cartState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);