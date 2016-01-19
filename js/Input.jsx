'use strict';

import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleChange.bind(this);
    }
    handleChange() {
        console.log(this);
    }
    render() {
        return (
            <input placeholder={this.props.placeholder} onChange={(e) => this.handleChange(e)}/>
        );
    }
}

export default Input;