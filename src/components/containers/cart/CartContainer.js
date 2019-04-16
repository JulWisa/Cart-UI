import React, {Component} from "react";
import {connect} from "react-redux";

import Cart from "../../views/cart/Cart";
import * as cartAction from "../../../actions/cartActions";
import * as productsAction from "../../../actions/productsActions";

class CartContainer extends Component {
    render() {
        return (
            <Cart {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onClearCart: cart => {
            dispatch(cartAction.clearCart());
            dispatch(productsAction.addAllProductsFromCart(cart))
        },
        onRemoveProduct: id => {
            dispatch(cartAction.removeCartElement(id));
            dispatch(productsAction.increaseProductCount({id}))
        },
        onRemoveProductType: cartElement => {
            dispatch(cartAction.removeCartElementType(cartElement.id));
            dispatch(productsAction.increaseProductCount(cartElement))
        }
    };
};

const mapStateToProps = function (store) {
    return {
        cart: store.cartState,
        products: store.productsState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);