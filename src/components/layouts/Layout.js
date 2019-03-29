import React from 'react';
import Paper from "../../../node_modules/@material-ui/core/Paper/Paper";

class Layout extends React.Component{
    render(){
        return(
            <Paper className="layout">
                {this.props.children}
            </Paper>
        );
    }
}

export default Layout;