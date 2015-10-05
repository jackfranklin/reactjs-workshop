class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentWillMount() {
    $.getJSON('https://api.github.com/users/jackfranklin/repos').then((data) => {
      this.setState({ repos: data });
    });
  }

  render() {
    const repos = this.state.repos.map((repo) => {
      return <li key={repo.name}>{ repo.name }</li>;
    });

    return (
      <ul>{repos}</ul>
    );
  }
};

React.render(
  <HelloWorld />,
  document.body
);
