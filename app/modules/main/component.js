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

export default Main;

export let __hotReload = true;
