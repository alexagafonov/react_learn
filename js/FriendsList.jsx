'use strict';

import React, { Component } from 'react';
import Button from './Button';

class FriendsList extends Component {
    render() {
        var createItem = function(item) {
        	console.log(this);
            return <li key={item.id}><span className='friend__name'>{item.text}</span><Button txt='Edit Friend'/><Button txt='Remove Friend'/></li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

export default FriendsList;