'use strict';

import React, { Component } from 'react';

class Select extends Component {
    render() {
      return (
          <select className={this.props.className}>
              {this.props.list.map((optionValue, i) =>
                  <option key={i}>{optionValue}</option>
              )}
          </select>
      );
    }
}

Select.propTypes = {
  list: React.PropTypes.obj,
  className: React.PropTypes.txt,
};

export default Select;
