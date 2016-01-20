import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/app.js';
import appReducers from './app/reducers';

let store = createStore(appReducers, {
    activeModule: 'Main',
    main: { text: 'main'},
    repairs: { text: 'repairs'},
    stock: { text: 'stock'},
});

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('.root')
);

export let __hotReload = true;
