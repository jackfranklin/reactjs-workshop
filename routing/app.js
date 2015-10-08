const { Router, Route, Link } = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <p>This is my app</p>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <p>About Me</p>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));
