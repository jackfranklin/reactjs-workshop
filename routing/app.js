const { Router, Route, Link } = ReactRouter;

class App extends React.Component {
  userGo() {
    this.props.history.pushState(null, `/repos/${this.refs.userInput.value}`);
  }

  render() {
    return (
      <div>
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">About Me</Link>
        <Link activeClassName="active" to="/repos/jackfranklin">Jack's hard work</Link>
        <Link activeClassName="active" to="/repos/onishiweb">Adam's Lazy work</Link>
        <p>This is my app</p>
        <input type='text' ref='userInput' />
        <button onClick={(e) => this.userGo()}>Go</button>
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

class Home extends React.Component {

  render() {
    return (
      <div>
        <p>Home</p>
      </div>
    );
  }
}

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  fetchData(username) {
    fetch(`https://api.github.com/users/${username}/repos`).then(r => r.json()).then((data) => {
      this.setState({ repos: data });
    });
  }

  componentWillMount() {
    this.fetchData(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.username !== this.props.params.username) {
      this.fetchData(nextProps.params.username);
    }
  }

  render() {
    const repos = this.state.repos.map((repo) => {
      return <li key={repo.name}>{repo.name}</li>;
    });

    return (
      <div>
        <ul>{repos}</ul>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="" component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos/:username" component={Repos} />
    </Route>
  </Router>
), document.getElementById('app'));
