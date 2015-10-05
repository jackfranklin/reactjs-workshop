class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'ReactJS workshop', done: false },
        { id: 2, text: 'Go for a run', done: false },
        { id: 3, text: 'Clean my bike', done: false },
      ],
    };
  }

  todoIsDone(id) {
    let doneTodoIndex = this.state.todos.findIndex((todo) => todo.id === id);
    let todos = this.state.todos;
    todos[doneTodoIndex].done = true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <Todos todos={this.state.todos} doneCallback={(id) => this.todoIsDone(id)} />
    );
  }
};

class Todo extends React.Component {
  todoIsDone() {
    this.props.doneCallback(this.props.todo.id);
  }

  renderButton() {
    if (this.props.todo.done === true) return null;
    return (
      <button onClick={(e) => this.todoIsDone() }>Mark as Done</button>
    );

  }
  render() {
    return (
      <div>
        <p>{ this.props.todo.text }</p>
        <p>Done: { this.props.todo.done === true ? 'YES' : 'NO' }</p>
        { this.renderButton() }
      </div>
    );
  }
}

class Todos extends React.Component {
  todoIsDone(id) {
    this.props.doneCallback(id);
  }

  render() {
    const todoItems = this.props.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo todo={todo} doneCallback={(id) => this.todoIsDone(id) } />
        </li>
      );
    });

    return (
      <ul>
        { todoItems }
      </ul>
    );
  }
}

React.render(
  <MyApp />,
  document.body
);
