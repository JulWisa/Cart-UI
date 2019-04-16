import React, {Component} from 'react';

import Paper from "@material-ui/core/Paper";

class Layout extends Component{
    render(){
        return(
            <Paper className="layout">
                {this.props.children}
            </Paper>
        );
    }
}

export default Layout;