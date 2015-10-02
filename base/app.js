var HelloWorld = React.createClass({
  render: function() {
    return (<p>Hello World</p>);
  }
});

React.render(
  <HelloWorld />,
  document.body
);
