'use strict';

import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button>{this.props.txt}</button>
        );
    }
}

export default Button;