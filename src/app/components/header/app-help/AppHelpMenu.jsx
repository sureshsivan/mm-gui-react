import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class AppHelpMenu extends Component {

    render() {
        return (
            <Menu.Item fitted>
                <Icon name='help' circular bordered fitted inverted link/>
            </Menu.Item>
        )
    }
}
