import React from 'react';
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import TopBar from './header/semantic/TopBar'
import reducers from '../reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <TopBar/>
            </Provider>
        );
    }
}

