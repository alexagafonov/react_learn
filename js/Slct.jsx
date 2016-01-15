'use strict';

import React, { Component } from 'react';

class Slct extends Component {
  render() {
    return <select>
                {this.props.list.map(function(optionValue, i){
                    return <option key={i}>{optionValue}</option>;
                })}
            </select>
  }
}

export default Slct;