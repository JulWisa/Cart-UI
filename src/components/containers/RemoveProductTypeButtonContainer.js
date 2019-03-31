import RemoveProductTypeButton from "../views/cart/RemoveProductTypeButton";
import React from "react";
import {removeProductType} from "../../actions/cart-actions";
import {connect} from "react-redux";

class RemoveProductTypeButtonContainer extends React.Component{
    render() {
        return (
            <RemoveProductTypeButton {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return{
        onRemoveProductType: () => dispatch(removeProductType(ownProps.productId))
    }
};

export default connect(null, mapDispatchToProps)(RemoveProductTypeButtonContainer);