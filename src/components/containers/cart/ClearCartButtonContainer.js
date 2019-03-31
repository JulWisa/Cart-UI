import React from "react";
import {connect} from "react-redux";
import {clearCart} from "../../../actions/cart-actions";
import ClearCartButton from "../../views/cart/ClearCartButton";

class ClearCartButtonContainer extends React.Component{
    render() {
        return (
            <ClearCartButton {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onClearCart: () => dispatch(clearCart())
    }
};

export default connect(null, mapDispatchToProps)(ClearCartButtonContainer);