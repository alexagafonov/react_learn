var Sel = React.createClass({
  render: function() {
    return (
      <select>
      	<Optn txt='Audi' />
      	<Optn txt='BMW' />
      	<Optn txt='Ford' />
      </select>
    );
  }
});

// <Optn data={this.props.data} />