'use strict';

import React, { Component } from 'react';
import $ from 'jquery'

class Menu extends Component {
	constructor(props) {
        super(props);
  		this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: '/data/data.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data.menu});
            }.bind(this),
        });
   }

    render() {
        return (
            <ul className='menu'>{this.state.data.map(item => {return <li key={item.id} className={item.isActive=="true" ? 'active' : null}>
            	<a href={item.link}>{item.name}</a>
            	</li>})}</ul>
        );
    }
}

export default Menu;