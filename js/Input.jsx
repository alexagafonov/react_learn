'use strict';

import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <input placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                value={this.props.value}
                data-elemid={this.props.elemId}
                className={this.props.className}/>
        );
    }
}

export default Input;
