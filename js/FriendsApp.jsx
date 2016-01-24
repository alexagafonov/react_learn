'use strict';

import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import FriendsList from './FriendsList';

class FriendsApp extends Component {
    constructor(props) {
        super(props);
        self = this;
        this.state = {items: [], text: '', isDisabled: true};
    }

    onChange(e) {
        var disabled;
        if (e.target.value) {
            disabled = false;
        } else {
            disabled = true;
        }
        self.setState({text: e.target.value, isDisabled: disabled});
    }

    handleAdd(e) {
        e.preventDefault();
        var newData = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        this.setState({items: newData, text: '', isDisabled: true, totalItems: newData});
    }

    filterApply(query) {
        let filteredData = this.state.totalItems.filter((item) => {
            if (item.text.indexOf(query) !== -1) {
                return item;
            }
        });
        this.setState({items: filteredData, text: ''});
    }

    onChangeFilter(e) {
        this.filterApply(e.target.value);
    }

    handleEdit(e) {
        let newData = [];
        self.state.items.forEach(function(item) {
            if (+item.id === +e.target.dataset.elemid) {
                item.isEdit = true;
            };
            newData.push(item);
        });
        self.setState({items: newData});
    }

    handleSave(e) {
        let newData = [];
        self.state.items.forEach(function(item) {
            if (+item.id === +e.target.dataset.elemid) {
                item.isEdit = false;
            };
            newData.push(item);
        });
        self.setState({items: newData});
    }

    editText(e) {
        let newData = [];
        self.state.items.forEach(function(item) {
            if (+item.id === +e.target.dataset.elemid) {
                item.newText = e.target.value;
                item.text = '';
            };
            newData.push(item);
        });
        self.setState({items: newData});
    }

    handleRemove(e) {
        let newData = self.state.items.filter(function(item) {
            return (+item.id !== +e.target.dataset.elemid);
        });
        self.setState({items: newData});
    }

    render() {
        return (
            <div>
                <form className='tab__form'>
                    <span>Напишите имя друга</span><Input onChange={this.onChange.bind(this)} value={this.state.text} placeholder='friend name'/>
                    <Button onClick={this.handleAdd.bind(this)} txt='Add Friend' isDisabled={this.state.isDisabled} />
                    <br />
                    <span>Фильтрация друзей</span><Input onChange={this.onChangeFilter.bind(this)} value={this.state.filter} placeholder='filter'/>
                </form>
                <FriendsList items={this.state.items} 
                    onEdit={this.handleEdit} 
                    onRemove={this.handleRemove} 
                    onEditing={this.editText}
                    onSave={this.handleSave}/>
            </div>
        )
    }
}

export default FriendsApp;
