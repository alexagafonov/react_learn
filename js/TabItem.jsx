'use strict';

import React, { Component } from 'react';

class TabItem extends Component {
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
            <li onClick={this.handleClick} c
                lassName={this.props.isCurrent ? 'current' : null}>{this.props.children}
            </li>
        );
    }
}

export default TabItem;
