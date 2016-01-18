'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import FriendsList from './FriendsList';
import Brands from './Brands';

const mountNode = document.getElementById('root');

ReactDOM.render(
    <Tabs>
    	<FriendsList />
        <Brands />
    </ Tabs>,
    mountNode
);
