import React, {Component} from 'react';
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import TotalRow from "./TotalRow";
import CartRow from "./CartRow";

class CartTableBody extends Component {
    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
    }

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
                    onRemoveProduct={() => this.props.onRemoveProduct(cartElement.id)}
                    onRemoveProductType={() => this.props.onRemoveProductType(cartElement)}
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