import RemoveProductButton from "../../views/cart/RemoveProductButton";
import {removeProduct} from "../../../actions/cart-actions";
import connect from "react-redux/es/connect/connect";
import React from "react";

class RemoveProductButtonContainer extends React.Component{
    render() {
        return (
            <RemoveProductButton {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return{
        onRemoveProduct: () => dispatch(removeProduct(ownProps.productId))
    }
};

export default connect(null, mapDispatchToProps)(RemoveProductButtonContainer);