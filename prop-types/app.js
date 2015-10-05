class MyApp extends React.Component {
  render() {
    return (
      <Person name="Jack" />
    )
  }
};

class Person extends React.Component {
  render() {
    return (
      <ul>
        <li>Name: { this.props.name }</li>
        <li>Location: { this.props.location }</li>
        <li>Favourite Number: { this.props.favouriteNumber }</li>
      </ul>
    );
  }
}

Person.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  favouriteNumber: React.PropTypes.number.isRequired
};

Person.defaultProps = {
  location: "London",
}

React.render(
  <MyApp />,
  document.body
);
