import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { App, initialState } from './app/app.js';
import appReducers from './app/reducers';
import DevTools from './dev-tools.js';

const enhancer = compose(
    DevTools.instrument()
);

let store = createStore(appReducers, initialState, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App></App>
            <DevTools/>
        </div>
    </Provider>,
    document.querySelector('.root')
);

export let __hotReload = true;
