import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const Welcome = props => {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

const About = props => {
  return (
    <div>
      <h1>What about what about what about</h1>
      <Link to="/">
        <img src="https://placekitten.com/100/100" />
      </Link>
    </div>
  );
};

const Contact = props => {
  return (
    <div>
      <span>{JSON.stringify(props)}</span>
      <h1>Do not contact me. I hate people</h1>
    </div>
  );
};

const Secret = props => {
  return (
    <div>
      <img src={props.gif} alt="a gif" />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/secret"
          component={routeProps => (
            <Secret
              gif="https://media.giphy.com/media/4m4Z29t0Lq0Sc/giphy.gif"
              {...routeProps}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
