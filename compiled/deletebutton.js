var DeleteButton = React.createClass({
  displayName: "DeleteButton",

  render: function () {
    return React.createElement(
      "button",
      null,
      this.props.txt
    );
  }
});