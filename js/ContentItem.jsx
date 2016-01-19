'use strict';

import React, { Component } from 'react';

class ContentItem extends Component {
    render() {
        return (
            <div className= {this.props.isCurrent ? 'current' : null}><div className='tab__content'>{this.props.children}</div></div>
        );
    }
}

export default ContentItem;