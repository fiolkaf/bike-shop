import React from 'react';
import { connect } from 'react-redux';

class Stock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.text}</div>;
    }
};

Stock.propTypes = {
    text: React.PropTypes.string.isRequired
};

function select(state) {
    return {
        text: state.stock.text
    }
}

export default connect(select)(Stock);

export let __hotReload = true;
