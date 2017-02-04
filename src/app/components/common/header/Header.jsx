import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="ui large top fixed menu transition hidden">
                    <div className="ui container">
                        <a className="active item">Home</a>
                        <a className="item">Work</a>
                        <a className="item">Company</a>
                        <a className="item">Careers</a>
                        <div className="right menu">
                            <div className="item">
                                <a className="ui button">Log in</a>
                            </div>
                            <div className="item">
                                <a className="ui primary button">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical inverted sidebar menu left">
                    <a className="active item">Home</a>
                    <a className="item">Work</a>
                    <a className="item">Company</a>
                    <a className="item">Careers</a>
                    <a className="item">Login</a>
                    <a className="item">Signup</a>
                </div>
                <div className="pusher">
                    <div className="ui inverted vertical masthhead center aligned segment">
                        <div className="ui container">
                            <div className="ui large secondary inverted pointing menu">
                                <a className="toc item">
                                    <i className="sidebar icon"></i>
                                </a>
                                <a className="active item">Home</a>
                                <a className="item">Work</a>
                                <a className="item">Company</a>
                                <a className="item">Careers</a>
                                <div className="right item">
                                    <a className="ui inverted button">Log in</a>
                                    <a className="ui inverted button">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}