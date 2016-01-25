'use strict';

import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <select>
                {this.props.list.map((optionValue, i) => {
                    return <option key={i}>{optionValue}</option>;
                })}
            </select>
        );
    }
}

export default Select;