import React from 'react';
import TableCell from "../../../../node_modules/@material-ui/core/TableCell/TableCell";
import Typography from "../../../../node_modules/@material-ui/core/Typography/Typography";
import {RUB_FORMATTER} from "../../../consants/numberFormatters";
import TableRow from "../../../../node_modules/@material-ui/core/TableRow/TableRow";

class TotalRow extends React.Component {
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