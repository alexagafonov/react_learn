var Tab1 = React.createClass({
  displayName: 'Tab1',

  render: function () {
    return React.createElement(
      'li',
      { className: 'tab' },
      React.createElement(TextField, { txt: 'Напишите имя друга' }),
      React.createElement(Input, { placeholder: 'Имя друга' }),
      React.createElement(DeleteButton, { txt: 'Добавить друга' })
    );
  }
});