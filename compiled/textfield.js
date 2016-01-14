var TextField = React.createClass({
  displayName: "TextField",

  render: function () {
    return React.createElement(
      "span",
      null,
      this.props.txt
    );
  }
});