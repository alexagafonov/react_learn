'use strict';

import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class FriendsList extends Component {
    render() {
        return (
            <div className='tab'>
                <span>Напишите имя друга</span>
                <Input placeholder='Введите имя друга'/>
                <Button txt='Добавить друга'/>
                <br />
                <span>Фильтрация друзей</span>
                <Input placeholder='Введите фильтр'/>
                <Button txt='Применить фильтр'/>
            </div>
        );
    }
}

export default FriendsList;
