import React from 'react';
import { PropTypes } from 'react';
import Stock from './modules/stock/index.js';
import Repairs from './modules/repairs/index.js';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';

import './app.scss!';

import { connect } from 'react-redux';
import { activateModule } from './actions';

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
        return <div className="app">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Bike</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav bsStyle="tabs" onSelect={ev => this.handleSelect(ev)}>
                            <NavItem active={activeModule === 'repairs'} eventKey="repairs" title="Repais">Repairs</NavItem>
                            <NavItem active={activeModule === 'stock'} eventKey="stock" title="Stock">Stock</NavItem>
                        </Nav>
                    </Navbar>
                    <div></div>
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
