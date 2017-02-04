import React, { Component } from 'react'
import { Header, Input, Menu, Segment, Dropdown } from 'semantic-ui-react'

export default class AppBar extends Component {
    // state = { activeItem: 'home' }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = 'home'

        return (
            <div>
                <Menu pointing fixed='top' inverted>
                    <Header as='h2'>Aplication Title</Header>
                    <Menu.Item name='home' active={true} onClick={this.handleItemClick} />
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Dropdown item icon='wrench' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

                <Segment>
                    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>

            </div>
        )
    }
}