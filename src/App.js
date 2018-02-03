import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="w3-center w3-padding-64 w3-text-white">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className=''>Pathephone</h1>
          <p>distributed audio player</p>
          <br />
          <a className='w3-btn w3-orange'
            href='https://github.com/pathephone/pathephone-desktop/releases/latest'
          >
            Get latest release
          </a>
        </header>
        <div className='w3-center'>
          <p className='w3-large'>
            Imagine Spotify | Google Music | iTunes powered by torrents.
          </p>
          <p>
            Yeah, you get it right.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
