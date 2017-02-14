import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import AppTitle from './AppTitle'
import SearchBar from '../search-bar/SearchField.component'
import AppMenuList from '../app-menu/AppMenuList'
import AppSettingsMenu from '../app-settings/AppSettingsMenu'

export default class TopBar extends Component {

    render() {
        const activeItem = 'home'
        return (
            <div>
                <Menu pointing fixed='top' inverted>
                    <AppTitle/>
                    <AppMenuList/>
                    <Menu.Menu position='right'>
                        <SearchBar/>
                        <AppSettingsMenu/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
