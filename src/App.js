import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

const Welcome = props => {
  return <h1>hello world</h1>;
};

const About = props => {
  return <h1>What about what about what about</h1>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Welcome} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
