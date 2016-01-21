import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/app.js';
import appReducers from './app/reducers';

let store = createStore(appReducers, {
    activeModule: 'Main',
    Main: { text: 'main'},
    Repairs: { text: 'repairs'},
    Stock: { text: 'stock'},
});

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('.root')
);

export let __hotReload = true;
