import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

const APP_TITLE = 'My REACT App';

export default class SearchBar extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
        )
    }
}