var Input = React.createClass({
  displayName: "Input",

  render: function () {
    return React.createElement("input", { placeholder: this.props.placeholder });
  }
});