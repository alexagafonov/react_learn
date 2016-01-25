'use strict';

import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.editText = this.editText.bind(this);
    }

    handleRemove(e) {
        this.props.onRemove(e);
    }

    handleEdit(e) {
        this.props.onEdit(e);
    }

    handleSave(e) {
        this.props.onSave(e);
    }

    editText(e) {
        this.props.onEditing(e);
    }

    render() {
        return (
            <ul>
            {this.props.items.map(item => {
                return (
                    <li key={item.id} className={ item.isEdit ? 'edit' : null }>
                        <span
                            className="friend__name">{ item.newText ? item.newText : item.text }
                        </span>
                        <Input
                            onChange={ this.editText }
                            value={ item.newText ? item.newText : item.text }
                            className="editfield"
                            elemId={ item.id } /
                        >
                        <Button
                            onClick={this.handleEdit}
                            className="editbtn"
                            txt="Edit Friend"
                            elemId={ item.id } /
                        >
                        <Button
                            onClick={this.handleSave}
                            className="savebtn"
                            txt="Save Friend"
                            elemId={ item.id } /
                        >
                        <Button
                            onClick={this.handleRemove}
                            txt="Remove Friend"
                            elemId={ item.id } /
                        >
                    </li>
                );}
            )}
            </ul>
        );
    }
}

export default FriendsList;
