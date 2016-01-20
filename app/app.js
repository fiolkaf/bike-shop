import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { activateModule } from './actions';

import * as Modules from './modules/index';

import { Row, Nav, Grid, Navbar, NavItem } from 'react-bootstrap';

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
        let Module = Modules[this.props.activeModule].component;
        return <div className="app">
                <Navbar>
                    <Nav bsStyle="tabs" onSelect={ev => this.handleSelect(ev)}>
                        { Object.keys(Modules).map(name => (
                            <NavItem key={name} active={activeModule === name} eventKey={name} title={name}>{Modules[name].title}</NavItem>
                          ))
                        }
                    </Nav>
                </Navbar>
                <Module/>
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
