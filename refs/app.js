class MyApp extends React.Component {
  render() {
    return (
      <CommentBox />
    );
  }
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  componentDidMount() {
    this.refs.commentInput.focus();
  }

  commentChange(event) {
    const val = event.target.value;

    this.setState({ comment: val });
  }

  render() {
    return (
      <div>
        <p>Enter a comment</p>
        <input ref="commentInput" type='text' value={this.state.comment} onChange={(e) => this.commentChange(e) } />
        <hr />
        <p>Your comment preview:</p>
        <p>{ this.state.comment }</p>
      </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);
