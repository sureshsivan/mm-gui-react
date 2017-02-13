import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const APP_TITLE = 'My REACT App';

export default class AppTitle extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Menu.Item header>
                <img src="http://lorempixel.com/30/30/"/>
                &nbsp;&nbsp;
                {APP_TITLE}
            </Menu.Item>
        )
    }
}