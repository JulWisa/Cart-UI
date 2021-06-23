import React from 'react';
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import TotalRow from "./TotalRow";
import CartRow from "./CartRow";

function CartTableBody(props) {
    function getProductData(id) {
        let result = props.products.find(product => product.id === id);
        return {name: result.name, price: result.price}
    }

    function getBody() {
        if (props.cart.length > 0)
            return props.cart.map(cartElement => {
                let productData = getProductData(cartElement.id);
                let cartProduct = Object.assign(productData, cartElement);
                return <CartRow
                    product={cartProduct}
                    onRemoveProduct={() => props.onRemoveProduct(cartElement.id)}
                    onRemoveProductType={() => props.onRemoveProductType(cartElement)}
                    key={cartElement.id}/>
            });
        return (
            <TableRow>
                <TableCell className="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
    }

    return (
        <TableBody>
            {getBody()}
            <TotalRow cart={props.cart} products={props.products}/>
        </TableBody>
    );
}

export default CartTableBody;