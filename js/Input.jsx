'use strict';

import React, { Component } from 'react';

class Input extends Component {
    render() {
      return (
          <input placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            value={this.props.value}
            data-elemid={this.props.elemId}
            className={this.props.className}
          />
      );
    }
}

Input.propTypes = {
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
  elemId: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default Input;
