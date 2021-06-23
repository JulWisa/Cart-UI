import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

function TotalRow(props) {
    function getPrice(id)
    {
        let result = props.products.find(product => product.id === id);
        return result.price
    }
    let total = props.cart.reduce((sum, cartElement) => sum + getPrice(cartElement.id) * cartElement.count, 0);
    let formattedTotal = RUB_FORMATTER(total);

    return (
        <TableRow>
            <TableCell colSpan={5}>
                <Typography variant="overline">Всего: {formattedTotal}</Typography>
            </TableCell>
        </TableRow>
    );
}

export default TotalRow;