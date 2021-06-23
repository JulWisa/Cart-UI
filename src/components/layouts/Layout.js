import React from 'react';

import Paper from "@material-ui/core/Paper";

function Layout(props) {
    return (
        <Paper className="layout">
            {props.children}
        </Paper>
    );
}

export default Layout;