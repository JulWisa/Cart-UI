import RemoveIcon from "../../../../node_modules/@material-ui/icons/Remove";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import React from "react";

class RemoveProductButton extends React.Component{
    render() {
        return (
            <Button onClick={this.props.onRemoveProduct}>
                <RemoveIcon/>
            </Button>
        );
    }
}

export default RemoveProductButton;