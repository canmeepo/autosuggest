import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.styl';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import App from './components/App';


const store = createStore(reducers, {});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);