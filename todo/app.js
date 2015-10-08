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

class Todos extends React.Component {
  render() {
    const todoItems = this.props.todos.map((todo) => {
      return (<li key={todo.id}>{todo.text}</li>);
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
