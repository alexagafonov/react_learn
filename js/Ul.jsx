'use strict';

import React, { Component } from 'react';

class Ul extends Component {
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
    	// self = this;
        return (
        	<ul>
                {this.props.list.map(function(ListValue, i){
                    return <li key={i} data-number={i} /*onClick={self.handleClick}*/onClick={this.handleClick}>Tab-{i}</li>;
                })}
            </ul>
        );
    }
    handleClick() {
        console.log(this);
    }
}

export default Ul;