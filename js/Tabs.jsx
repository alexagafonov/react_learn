'use strict';

import React, { Component } from 'react';
import Ul from './Ul';

class Tabs extends Component {
    render() {
        return (
            <div className='tabs'>
                <Ul list={this.props.children} />
                {this.props.children}
            </div>
        );
    }
}

export default Tabs;
