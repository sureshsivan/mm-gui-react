import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class App extends React.Component {
    render() {
        return (
            <Modal trigger={<Button>This React with Semantic is Awesome right.... :) :) </Button>} basic size='small' >
                <Header icon='archive' content='Awesome React....' />
                <Modal.Content>
                    <p>This React with Semantic Ui is Awesome - I dont need bootstrap and all. Do you Agree..??</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted>
                        <Icon name='remove' /> No (you must be lying)
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}