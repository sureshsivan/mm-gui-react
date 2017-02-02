import React from 'react';
import { Header } from 'semantic-ui-react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2'>Header Through React Component</Header>
            </div>
            // <div style={{textAlign: 'center'}}>
            //     <h1>Hello World from React</h1>
            // </div>
        );
    }
}