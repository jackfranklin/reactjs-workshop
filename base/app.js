var HelloWorld = React.createClass({
  render: function() {
    return (<p>Hello World</p>);
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
