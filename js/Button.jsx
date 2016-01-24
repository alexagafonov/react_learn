'use strict';

import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} 
                className={this.props.className} 
                data-elemid={this.props.elemId} 
                disabled={this.props.isDisabled}>{this.props.txt}</button>
        );
    }
}

export default Button;