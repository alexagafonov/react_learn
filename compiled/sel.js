var Sel = React.createClass({
  displayName: 'Sel',

  render: function () {
    return React.createElement(
      'select',
      null,
      React.createElement(Optn, { txt: 'Audi' }),
      React.createElement(Optn, { txt: 'BMW' }),
      React.createElement(Optn, { txt: 'Ford' })
    );
  }
});

// <Optn data={this.props.data} />