import React, {Component} from 'react';
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import TotalRow from "./TotalRow";
import CartRow from "./CartRow";

class CartTableBody extends Component {
    getProductData(id) {
        let result = this.props.products.find(product => product.id === id);
        return {name: result.name, price: result.price}
    }

    getBody() {
        if (this.props.cart.length > 0)
            return this.props.cart.map(cartElement => {
                let productData = this.getProductData(cartElement.id);
                let cartProduct = Object.assign(productData, cartElement);
                return <CartRow
                    product={cartProduct}
                    onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                    onRemoveCartProduct={productId => this.props.onRemoveCartProduct(productId)}
                    key={cartElement.id}/>
            });
        return (
            <TableRow>
                <TableCell className="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
    }

    render() {
        return (
            <TableBody>
                {this.getBody()}
                <TotalRow cart={this.props.cart} products={this.props.products}/>
            </TableBody>
        );
    }
}

export default CartTableBody;