import React, {Component} from "react";
import Button from "@material-ui/core/Button";

class ClearCartButton extends Component{
    render() {
        return (
            <Button onClick={this.props.onClearCart}>
                Очистить корзину
            </Button>
        );
    }
}

export default ClearCartButton;