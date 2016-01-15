'use strict';

import React, { Component } from 'react';
import SpanTxt from './SpanTxt';
import InputTxt from './InputTxt';
import Btn from './Btn';

class FriendsList extends Component {
  render() {
    return <li>
              <SpanTxt txt='Напишите имя друга'/>
              <InputTxt placeholder='Введите имя друга'/>
              <Btn txt='Добавить друга'/>
              <br />
              <SpanTxt txt='Фильтрация друзей'/>
              <InputTxt placeholder='Введите фильтр'/>
              <Btn txt='Применить фильтр'/>
            </li>;
  }
}

export default FriendsList;
