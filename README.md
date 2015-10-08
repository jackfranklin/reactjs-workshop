# Introduction to ReactJS

These are various code samples and notes for a 3 hour workshop introducing ReactJS.

## Reading

- [Component Specification and Lifecycle Hooks](https://facebook.github.io/react/docs/component-specs.html)
- [React components as ES6 classes](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)
- [React Router](https://github.com/rackt/react-router)
- [Reusable Components](https://facebook.github.io/react/docs/reusable-components.html)
- [React 0.14 released](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
- [Redux](http://rackt.github.io/redux/)
- [jspm ES6 React example](https://github.com/jackfranklin/jspm-es6-react-example)

## Watching

- [ES6 and React, ReactJS Meetup](https://www.youtube.com/watch?v=NpMnRifyGyw)

## My Notes

# Base
- React is just the view layer
- you should try to create your app out of multiple small components (reusable components, we’ll look more into this later)
- React and ReactDOM as of 0.14
- JSX is not HTML in your JS, it gives you more. You will get used to it. Find a good package for your editor.
- JSX isn’t returning you HTML, it’s returning you React virtual dom components
- virtual DOM + efficient rendering rather than 2 way data binding
- each react component must return one element (which can contain multiple)
- Download the React dev tools!
- using Babel, which understands JSX

# Counter
- ES6 with Babel in the browser
- ES6 classes with React are the future, hence why we’re using them today
- props vs state - props come into the component and DON’T get changed by the component
- state is owned by the component and changes to it occur in the component itself
- use this.setState to change state, but remember that it doesn’t happen immediately
- the HTML outputted is a representation of your app at a given time given state X

# Comment Box
- componentDidMount, we’ll see other lifecycle hooks
- you can use refs to access the underlying DOM node - use this when you need to interact with the actual DOM (which should be very rarely - use this sparingly!)
- using a controlled component (input with a text value)

# Fetching Data
- componentWillMount instead of didMount - called just before the item will be rendered
- note how we map over an array of repos to return an array of React components
- each thing in a list has to have a key property, so React knows when it’s changed and if it has to rerender or not

#Properties and reusable components
- the goal is to create very reusable components
- if these components take in properties, you want to be able to be strict on which ones are required, set defaults, etc
- set static propTypes and defaultProps on the component’s class
- note the errors in the console

#Base Todo
- passing todos in as a prop

# Stateful Todos
- composability of components
- typical pattern: Todos => renders an array of Todo components
- each todo component stores the state on if its todo is done or not
- split out the rendering into multiple functions

# Single State Todos
- it can be preferred and often is thought of as better design if your entire application’s state is stored in one object
- lower level components then get given different parts of that state (so few components have the entire state), and a function to call when they edit that state
- there are libraries around this like Flux, Redux and so on that help us, but we’ll implement it by hand
- could (and should) set propTypes here to make sure the callbacks are always given
- render functions can return null
- the change propagates up through the app
- React contexts are coming that should help with this 
- note that the individual TODO component doesn’t know about any other state or how to change it, beyond just calling a function that it’s been given

# routing
- React Router is the defacto standard
- each URL is mapped to a component
- routes can be nested, and this.props.children gives you access to the nested elements (usually you just render them)
- show how we would add a route with a URL param and then fetch data based on that

# extras
- talk about building in Node normally
- link to my FB video on jspm + React
- testing React
