'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import FriendsApp from './FriendsApp';
import Brands from './Brands';

const mountNode = document.getElementById('root');


ReactDOM.render(
    <Tabs headers={['Header1','Header2','Header3']}>
        <FriendsApp />
        <Brands />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
    </ Tabs>,
    mountNode
);
