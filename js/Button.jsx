'use strict';

import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.txt}</button>
        );
    }
}

export default Button;