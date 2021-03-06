import React from 'react';
import { connect } from 'react-redux';
import { activateModule } from './actions';
import * as Modules from './modules/index';
import { Row, Nav, Grid, Navbar, NavItem } from 'react-bootstrap';

import './css/bootstrap.min.scss!';
import './app.scss!';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    handleSelect(key) {
        this.dispatch(activateModule(key));
    }

    render() {
        const { activeModule } = this.props;
        let Module = Modules[activeModule].component;
        return <div className="app">
                <Navbar>
                    <Nav bsStyle="tabs" onSelect={ev => this.handleSelect(ev)}>
                        { Object.keys(Modules).map(name => (
                            <NavItem key={name} active={activeModule === name} eventKey={name} title={name}>{Modules[name].title}</NavItem>
                          ))
                        }
                    </Nav>
                </Navbar>
                <Module {...this.props[activeModule]} />
            </div>;
    }
}

AppComponent.propTypes = {
    activeModule: React.PropTypes.string.isRequired
};

let select = state => {
    var composedSelect = Object.assign({}, {activeModule: state.activeModule});
    Object.keys(Modules).forEach(name => {
        composedSelect[name] = state[name];
    });
    return composedSelect;
};

export let initialState = {};
initialState.activeModule = 'Main';
Object.keys(Modules).forEach(name => {
    initialState[name] = Modules[name].initialState;
});

export let App = connect(select)(AppComponent);

export let __hotReload = true;
