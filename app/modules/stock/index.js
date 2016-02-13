import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import '/app/css/bootstrap.min.scss!';

import App from './component';
import reducers from './reducers';
import { connect } from 'react-redux';
import initialState from './initialState.js';

let store = createStore(reducers, initialState);
let AppComponent = connect(state => state)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.querySelector('.root')
);

export let __hotReload = true;
