import React, {Component} from "react";
import Button from "@material-ui/core/Button";

class RemoveProductTypeButton extends Component{
    render() {
        return (
            <Button onClick={this.props.onRemoveProductType}>
                Удалить все
            </Button>
        );
    }
}

export default RemoveProductTypeButton;