import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux';
import activateMenu from '../../../actions/index';

class AppMenuList extends Component {

    renderAppMenus(){
        return this.props.menus.map(menu => {
            return (
                <Menu.Item
                    icon={menu.iconCls}
                    name={menu.key}
                    key={menu.key}
                    content={menu.label}
                    active={menu.key === this.props.activeMenu}
                    onClick={()=>{this.props.activateMenu(menu.key)}}/>

            )
        });
    }

    render() {
        return (
            <Menu.Menu>
                {this.renderAppMenus()}
            </Menu.Menu>
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
    return bindActionCreators({activateMenu: activateMenu}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuList);