import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const APP_TITLE = 'My REACT App';

export default class UserMenus extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Dropdown item icon='wrench' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}