import Button from "../../../../node_modules/@material-ui/core/Button/Button";
import React from "react";

class RemoveProductTypeButton extends React.Component{
    render() {
        return (
            <Button onClick={this.props.onRemoveProductType}>
                Удалить все
            </Button>
        );
    }
}

export default RemoveProductTypeButton;