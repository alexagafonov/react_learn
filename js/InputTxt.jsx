'use strict';

import React, { Component } from 'react';

class InputTxt extends Component {
  render() {
    return <input placeholder={this.props.placeholder} />;
  }
}

export default InputTxt;