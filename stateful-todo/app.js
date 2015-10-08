class MyApp extends React.Component {
  render() {
    const todos = [
      { id: 1, text: 'ReactJS workshop', done: false },
      { id: 2, text: 'Go for a run', done: false },
      { id: 3, text: 'Clean my bike', done: false },
    ];

    return (
      <Todos todos={todos} />
    );
  }
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.todo.done };
  }

  toggleDone() {
    this.setState({ done: !this.state.done });
  }
  renderButton() {
    return (
      <button onClick={() => this.toggleDone()}>
        { this.state.done === true ? 'Mark as incomplete' : 'Mark as done' }
      </button>
    );
  }

  render() {
    const todo = this.props.todo;
    return (
      <div>
        <p>({ todo.id }): { todo.text } ({ this.state.done === true ? 'DONE' : 'NOT DONE' })</p>
        { this.renderButton() }
      </div>
    );
  }
}

class Todos extends React.Component {
  render() {
    const todoItems = this.props.todos.map((todo) => {
      return (<li key={todo.id}><Todo todo={todo} /></li>);
    });

    return (
      <ul>
        { todoItems }
      </ul>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);
