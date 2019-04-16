import React, {Component} from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";

class RemoveProductButton extends Component{
    render() {
        return (
            <Button onClick={this.props.onRemoveProduct}>
                <RemoveIcon/>
            </Button>
        );
    }
}

export default RemoveProductButton;