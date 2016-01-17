import { combineReducers } from 'redux';
import { ACTIVATE_MODULE } from './actions';

function reducers(state, action) {
    switch (action.type) {
        case ACTIVATE_MODULE:
            return Object.assign({}, state, { activeModule: action.name })
        default:
            return state;
    }
};

export default reducers;

export let __hotReload = true;
