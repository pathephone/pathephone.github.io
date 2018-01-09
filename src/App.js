import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Pathephone</h1>
          <hr className='App-header__divider' />
          <h2>distributed audio player</h2>
          <br />
          <a className='App-header__latest-release'
            href='https://github.com/pathephone/pathephone-desktop/releases/latest'
          >
            Get latest release
          </a>
        </header>
      </div>
    );
  }
}

export default App;
