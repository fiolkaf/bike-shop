import React from 'react';
import { Table, Panel } from 'react-bootstrap';

export default class Stock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel>
                <Table striped bordered condensed hover>
                    <tbody>
                        {this.props.items.map(item =>
                            <tr key={item.key}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Panel>
        );
    }
};

Stock.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export let __hotReload = true;
