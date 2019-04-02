import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import router from "./router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    {router}
                </Provider>
            </div>
        );
    }
}

export default App;
