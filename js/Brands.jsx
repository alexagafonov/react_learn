'use strict';

import React, { Component } from 'react';
import Slct from './Slct';

class Brands extends Component {
  render() {
    return <li>
              <Slct list={["Audi","BMW","Dodge","Ford","Nissan"]} />
            </li>;
  }
}

export default Brands;
