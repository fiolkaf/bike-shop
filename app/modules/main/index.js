import component from './component';
import reducers from './reducers';
import { connect } from 'react-redux';

let select = state => {
    return { text: state.text };
};

export default {
    title: 'Bike shop',
    component: connect(select)(component),
    reducers,
    select,
    initialState: { text: 'bike shop' }
};

export let __hotReload = true;
