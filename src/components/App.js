import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Webpack test!</h1>
            </div>
        );
    }
}

export default hot(module)(App)