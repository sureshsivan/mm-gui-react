import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import AppTitle from '../app-title/AppTitle'
import SearchBar from '../search-bar/SearchField.component'
import AppMenuList from '../app-menu/AppMenuList'
import AppSettingsMenu from '../app-settings/AppSettingsMenu'
import AppHelpMenu from '../app-help/AppHelpMenu'

export default class HeaderBar extends Component {

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
                        <AppHelpMenu/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
