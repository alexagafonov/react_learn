'use strict';

import React, { Component } from 'react';

class Btn extends Component {
  render() {
    return <button>{this.props.txt}</button>;
  }
}

export default Btn;