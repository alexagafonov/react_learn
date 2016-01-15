'use strict';

import React, { Component } from 'react';
import FriendsList from './FriendsList';
import Brands from './Brands';

class Tabs extends Component {
    render() {
        return  <ul>
                    <FriendsList />
                    <Brands />
                </ul>;
  }
}

export default Tabs;
