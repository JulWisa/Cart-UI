import React from "react";
import CartTableBody from "../../views/cart/CartTableBody";
import {connect} from "react-redux";

class CartTableBodyContainer extends React.Component{
    render() {
        return (
            <CartTableBody cart={this.props.cart}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        cart: store.cartState
    };
};

export default connect(mapStateToProps)(CartTableBodyContainer);