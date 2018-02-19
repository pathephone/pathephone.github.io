import React, { Component } from 'react';
import Header from './App/Header'
import KeyFeatures from './App/KeyFeatures'
import Donate from './App/Donate'
import Roadmap from './App/Roadmap'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <KeyFeatures />
        <hr />
        <Roadmap />
        <br />
        <hr />
        <Donate />
        <br />
      </div>
    );
  }
}

export default App;
