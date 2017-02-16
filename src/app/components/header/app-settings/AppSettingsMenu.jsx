import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Actions from '../../../actions/index';

class AppSettingsMenu extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Dropdown item icon='wrench' simple>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{this.props.mockLoginSuccess()}}>Login</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{this.props.mockLogout()}}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

const mapStateToProps = function (state){
    return {
        menus: state.menus,
        activeMenu: state.activeMenu
    };
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators({
        mockLoginSuccess: Actions.mockLoginSuccess,
        mockLogout: Actions.mockLogout
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingsMenu);