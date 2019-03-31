import React from "react";
import Button from "../../../../node_modules/@material-ui/core/Button/Button";

class ClearCartButton extends React.Component{
    render() {
        return (
            <Button onClick={this.props.onClearCart}>
                Очистить корзину
            </Button>
        );
    }
}

export default ClearCartButton;