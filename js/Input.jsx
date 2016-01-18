'use strict';

import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <input placeholder={this.props.placeholder} />
        );
    }
}

export default Input;