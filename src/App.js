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

const Secret = props => {
  return (
    <div>
      <img src={props.gif} alt="a gif" />
    </div>
  );
};

const Topics = props => {
  const stuff = ['politics', 'sports', 'music', 'coding'];
  /**
   * Programmatically generate routes for everything in 'stuff'
   *  /topics/politics
   *  /topics/sports
   *  /topics/music
   *  /topics/coding
   */

  return (
    <div>
      <h1>More Routes Here</h1>
      <br />
      {stuff.map(i => (
        <div key={i}>
          <Link to={`/topics/${i}`}>{i}</Link>
          <br />
        </div>
      ))}
      {stuff.map(i => (
        <Route
          key={i}
          exact
          path={`/topics/${i}`}
          component={props => (
            <div>
              <h1>{`The topic is ${i}`}</h1>
            </div>
          )}
        />
      ))}
    </div>
  );
};

/**
 * fancy syntax
   const Greet = ({ match }) => (
    <div>
      <h2>{`hello ${match.params.name}`}</h2>
    </div>
  );
 */

const Greet = props => {
  return (
    <div>
      <h2>{`hello ${props.match.params.name}`}</h2>
    </div>
  );
};

const Greet2 = props => {
  const params = new URLSearchParams(props.location.search);
  const name = params.get('name');
  return (
    <div>
      <h2>{`hola ${name || 'stranger'}`}</h2>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        {/* this is the navbar that renders regardless of what route you're on since it's outside of the routes */}
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

        {/* this one has the component defined in-line */}
        <Route
          exact
          path="/contact"
          component={props => (
            <div>
              <span>{JSON.stringify(props)}</span>
              <h1>Do not contact me. I hate people</h1>
            </div>
          )}
        />
        {/* this one uses a custom prop */}
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
        {/* this one is for using the same component with a different custom prop */}
        <Route
          exact
          path="/secret2"
          component={routeProps => (
            <Secret
              gif="https://media.giphy.com/media/yow6i0Zmp7G24/giphy.gif"
              {...routeProps}
            />
          )}
        />
        {/* this one uses route parameters */}
        <Route exact path="/hello/:name" component={Greet} />
        {/* this one is designed for query strings */}
        <Route exact path="/hola" component={Greet2} />
        {/* this one is an example nested routing */}
        <Route path="/topics" component={Topics} />
      </div>
    );
  }
}

export default App;
