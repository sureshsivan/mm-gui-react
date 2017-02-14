import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AppMenuList extends Component {

    renderAppMenus(){
        return this.props.menus.map(eachMenu => {
            return (
                <Menu.Item icon={eachMenu.iconCls} name={eachMenu.key} key={eachMenu.key} content={eachMenu.name}/>
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


function mapStateToProps(state){
    return {
        menus: state.menus
    };
}

export default connect(mapStateToProps)(AppMenuList);