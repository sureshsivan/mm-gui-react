import React from 'react';

export default class HeaderSticky extends React.Component {
    render() {
        return (
            <div className="ui borderless main menu fixed">
                <div className="ui text container">
                    <div href="#" className="header item">
                        Project Name
                    </div>
                    <a href="#" className="item">Blog</a>
                    <a href="#" className="item">Articles</a>
                    <a href="#" className="ui right floated dropdown item" tabIndex="0">
                        Dropdown <i className="dropdown icon"></i>
                        <div className="menu transition hidden" tabIndex="-1">
                            <div className="item">Link Item</div>
                            <div className="item">Link Item</div>
                            <div className="divider"></div>
                            <div className="header">Header Item</div>
                            <div className="item">
                                <i className="dropdown icon"></i>
                                Sub Menu
                                <div className="menu transition hidden">
                                    <div className="item">Link Item</div>
                                    <div className="item">Link Item</div>
                                </div>
                            </div>
                            <div className="item">Link Item</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}