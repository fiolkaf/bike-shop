import React from 'react';

export default class Repairs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.text}</div>;
    }
};

Repairs.propTypes = {
    text: React.PropTypes.string.isRequired
};

export let __hotReload = true;
