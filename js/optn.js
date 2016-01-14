var Optn = React.createClass({
  render: function() {
    return (
        <option>{this.props.txt}</option>
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