import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { activateModule } from './actions';

import * as Modules from './modules/index';

import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

import './app.scss!';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    handleSelect(key) {
        this.dispatch(activateModule(key));
    }

    render() {
        const { activeModule } = this.props;
        var Module = Modules[this.props.activeModule];
        return <div className="app">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Bike</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav bsStyle="tabs" onSelect={ev => this.handleSelect(ev)}>
                        <NavItem active={activeModule === 'Repairs'} eventKey="Repairs" title="Repars">Repairs</NavItem>
                        <NavItem active={activeModule === 'Stock'} eventKey="Stock" title="Stock">Stock</NavItem>
                    </Nav>
                </Navbar>
                <Module>
                </Module>
            </div>;
    }
};

App.propTypes = {
    activeModule: PropTypes.string.isRequired
};

function select(state) {
    return {
        activeModule: state.activeModule
    }
}

export let __hotReload = true;

export default connect(select)(App);
