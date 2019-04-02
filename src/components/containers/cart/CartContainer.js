import Cart from "../../views/cart/Cart";
import React from "react";
import {connect} from "react-redux";
import {clearCart, removeProduct, removeProductType} from "../../../actions/cart-actions";

class CartContainer extends React.Component{
    render() {
        return (
            <Cart {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onClearCart: () => dispatch(clearCart()),
        onRemoveProduct: productId => dispatch(removeProduct(productId)),
        onRemoveProductType: productId => dispatch(removeProductType(productId))
    };
};

const mapStateToProps = function (store) {
    return {
        cart: store.cartState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);