'use strict';

import React, { Component } from 'react';
import TabItem from './TabItem';
import ContentItem from './ContentItem';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { items: [], text: '', currentTab: 0 };
    }
    handleClick(tab) {
        this.setState({ currentTab: tab });
    }
    render() {
        const self = this;
        return (
            <div className="tabs">
                <ul className="tabs__header">
                    {this.props.headers.map((li, i) =>
                        <TabItem key={i}
                            handleClick={self.handleClick.bind(this, i)}
                            isCurrent={(self.state.currentTab === i)}>{ li }
                        </ TabItem>
                    )}
                </ul>
                {this.props.children.map((div, i) =>
                    <ContentItem key={i} isCurrent={(self.state.currentTab === i)}>{ div }
                    </ ContentItem>
                )}
            </div>
        );
    }
}

export default Tabs;
