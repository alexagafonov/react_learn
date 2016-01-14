var Tabs = React.createClass({
  displayName: "Tabs",

  render: function () {
    return React.createElement(
      "ul",
      { className: "tabs" },
      React.createElement(Tab1, null),
      React.createElement(Tab2, null)
    );
  }
});

ReactDOM.render(React.createElement(Tabs, null), document.getElementById('content'));