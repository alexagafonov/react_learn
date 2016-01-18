'use strict';

import React, { Component } from 'react';
import Select from './Select';

class Brands extends Component {
    render() {
        return (
        	<div className='tab'>
                 <Select list={["Audi","BMW","Dodge","Ford","Nissan"]} />
            </div>
        );
  }
}

export default Brands;
