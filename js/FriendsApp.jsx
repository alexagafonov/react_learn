'use strict';

import React, { Component } from 'react';

class FriendsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleAdd = this.handleAdd.bind(this);
        this.onChange = this.onChange.bind(this);
        this.filterApply = this.filterApply.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }
    onChange(e) {
        this.setState({text: e.target.value});
    }
    handleAdd(e) {
        e.preventDefault();
        var newData = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        this.setState({items: newData, text: ''});
    }
    filterApply(query) {
        let filteredData = this.state.items.filter((item) => {
            if (item.text.indexOf(query) !== -1) {
                return item;
            }
        });
        this.setState({items: filteredData, text: ''});
    }
    onChangeFilter(e) {
        this.filterApply(e.target.value);
    }
    render() {
        return (
            <div>
                <form className='tab__form'>
                    <span>Напишите имя друга</span><input onChange={this.onChange} value={this.state.text} placeholder='Friend name'/>
                    <button onClick={this.handleAdd}>Add Friend</button>
                    <br />
                    <span>Фильтрация друзей</span><input onChange={this.onChangeFilter}  value={this.state.filter} placeholder='filter'/>
                </form>
                <FriendsList items={this.state.items}/>
            </div>
        )
    }
}

var FriendsList = React.createClass({
    render() {
        var createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

export default FriendsApp;
