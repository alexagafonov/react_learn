var Tab1 = React.createClass({
  render: function() {
    return (
      <li className="tab">
      	<TextField txt='Напишите имя друга' />
      	<Input placeholder='Имя друга' />
      	<DeleteButton txt='Добавить друга' />
      </li>
    );
  }
});