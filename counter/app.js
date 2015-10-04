class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount(e) {
    e.preventDefault();
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <div>
        <p>Current Count: { this.state.count }</p>
        <a onClick={ (e) => this.incrementCount(e) }>Increment Me</a>
      </div>
    );
  }
}

React.render(
  <MyApp />,
  document.body
);
