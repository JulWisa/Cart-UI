import React from 'react';
import {connect} from "react-redux";
import {addProduct} from "../../actions/cart-actions";
import ProductRow from "../views/products/ProductRow";

class ProductRowContainer extends React.Component{
    render() {
        return (
            <ProductRow {...this.props}/>
        );
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onAddProduct: product => { dispatch(addProduct(product))}
    }
};

export default connect(null, mapDispatchToProps)(ProductRowContainer);