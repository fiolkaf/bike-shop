import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.text}</div>;
    }
};

Main.propTypes = {
    text: React.PropTypes.string.isRequired
};

function select(state) {
    return {
        text: state.main.text
    }
}

export default connect(select)(Main);

export let __hotReload = true;
