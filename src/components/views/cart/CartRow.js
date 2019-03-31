import React from 'react';
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import {RUB_FORMATTER} from "../../../consants/numberFormatters";
import RemoveProductButtonContainer from "../../containers/RemoveProductButtonContainer";

class CartRow extends React.Component {
    render() {
        let product = this.props.product;
        let price = RUB_FORMATTER(product.price * product.count);
        return (
            <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{product.count}</TableCell>
                <TableCell>
                    <RemoveProductButtonContainer product={product}/>
                </TableCell>
                <TableCell>
                    <Button onClick={this.props.onRemoveProduct}>
                        Удалить все
                    </Button>
                </TableCell>
            </TableRow>);
    }
}

export default CartRow;