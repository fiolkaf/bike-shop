import React from 'react';

export default class Stock extends React.Component {
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

export let __hotReload = true;
