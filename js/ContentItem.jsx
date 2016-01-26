'use strict';

import React, { Component } from 'react';

class ContentItem extends Component {
    render() {
      return (
          <div className= {this.props.isCurrent ? 'current' : null}>
              <div className="tab__content">{this.props.children}</div>
          </div>
      );
    }
}

ContentItem.propTypes = {
  isCurrent: React.PropTypes.bool,
  children: React.PropTypes.object,
};

export default ContentItem;
