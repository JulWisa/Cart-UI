import React, {Component} from 'react';
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";

import {RUB_FORMATTER} from "../../../common/numberFormatters";

class TotalRow extends Component {
    render() {
        let total = this.props.cart.reduce((sum, product) => sum + product.price * product.count, 0);
        let formattedTotal = RUB_FORMATTER(total);
        return (
            <TableRow>
                <TableCell colSpan={5}>
                    <Typography variant="overline">Всего: {formattedTotal}</Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default TotalRow;