'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import FriendsApp from './FriendsApp';
import Brands from './Brands';
import Menu from './Menu';

const mountNode = document.getElementById('root');


ReactDOM.render(
    <Tabs headers={['Header1','Header2','Header3']}>
        <FriendsApp />
        <Brands />
        <Menu />
    </ Tabs>,
    mountNode
);
