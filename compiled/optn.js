var Optn = React.createClass({
  displayName: "Optn",

  render: function () {
    return React.createElement(
      "option",
      null,
      this.props.txt
    );
  }
});

// var Optn = React.createClass({
//   render: function() {
//   	var auto = this.props.data.map(function(opt) {
//       return {opt.txt}
//     });
//     return (
//         <option>{auto}</option>
//     );
//   }
// });