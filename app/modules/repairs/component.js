import React from 'react';
import { connect } from 'react-redux';

class Repairs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Repairs</div>;
    }
};

Repairs.propTypes = {
//    text: React.PropTypes.string.isRequired
};

function select(state) {
    return {
        text: state.text
    }
}

export default connect(select)(Repairs);

export let __hotReload = true;
