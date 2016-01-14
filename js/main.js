var Tabs = React.createClass({
  render: function() {
    return (
      <ul className="tabs">
        <Tab1 />
        <Tab2 />
      </ul>
    );
  }
});

ReactDOM.render(
  React.createElement(Tabs, null),
  document.getElementById('content')
);