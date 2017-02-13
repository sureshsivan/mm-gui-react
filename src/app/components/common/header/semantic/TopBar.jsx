import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import AppTitle from './AppTitle'
import SearchBar from '../search-bar/SearchField'
import UserMenus from './UserMenus'

const APP_MENUS = [{
        label: 'Home',
        key: 'home',
        icon:'home'
    }, {
        label: 'Wi-Fi',
        key: 'wifi',
        icon: 'wifi'
    },{
        label: 'Home2',
        key: 'home2',
        icon:'home'
    }, {
        label: 'Wi-Fi2',
        key: 'wifi2',
        icon: 'wifi'
    },{
        label: 'Home3',
        key: 'home3',
        icon:'home'
    }, {
        label: 'Wi-Fi3',
        key: 'wifi3',
        icon: 'wifi'
    }];

export default class TopBar extends Component {
    constructor(props){
        super(props)
        this.buildMenus = this.buildAppMenus.bind(this);
    }
    buildAppMenus(){
        return APP_MENUS.map(function(eachMenu, i){
            return <Menu.Item icon={eachMenu.icon} name={eachMenu.key} key={eachMenu.key} active={i === 0} content={""}/>
        });
    }
    render() {
        const activeItem = 'home'
        return (
            <div>
                <Menu pointing fixed='top' inverted>
                    <AppTitle/>
                    {this.buildAppMenus()}
                    <Menu.Menu position='right'>
                        <SearchBar/>
                        <UserMenus/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
