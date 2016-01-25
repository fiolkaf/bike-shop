import React from 'react';

export default class Main extends React.Component {
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

export let __hotReload = true;
