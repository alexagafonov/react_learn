'use strict';

import React, { Component } from 'react';
import Select from './Select';

class Brands extends Component {
    render() {
      return (
          <Select className="tab__form__select" list={['Audi', 'BMW', 'Dodge', 'Ford', 'Nissan']} />
      );
    }
}

export default Brands;
