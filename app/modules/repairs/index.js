import component from './component';
import reducers from './reducers';
import { connect } from 'react-redux';

let select = state => {
    return { text: state.text };
};

export default {
    title: 'Repairs',
    component: connect(select)(component),
    reducers,
    select,
    initialState: { text: 'Repairs' }
};

export let __hotReload = true;
