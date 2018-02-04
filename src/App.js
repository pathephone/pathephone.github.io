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
          <p className='w3-xlarge'>
            Imagine Spotify | Google Music | Apple Music powered by torrents.
          </p>
          <div class="w3-responsive w3-padding">
            <table class="w3-table-all w3-large">
              <tr>
                <th></th>
                <th>Spotify</th>
                <th>Google Music</th>
                <th>Apple Music</th>
                <th>Pathephone</th>
              </tr>
              <tr>
                <td><b>Quality</b></td>
                <td>320kbps (Premium)</td>
                <td>320kbps</td>
                <td>256kbps</td>
                <td>no limits, because p2p</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>$9.99/mo (Premium)</td>
                <td>$9,99/mo</td>
                <td>$9,99/mo</td>
                <td>no price, because p2p</td>
              </tr>
              <tr>
                <td><b>Library</b></td>
                <td>~ 30 million tracks</td>
                <td>~ 40 million tracks</td>
                <td>~ 45 million tracks</td>
                <td>any music shared by users</td>
              </tr>
              <tr>
                <td><b>Regional restrictions</b></td>
                <td><a href='https://support.spotify.com/is/using_spotify/the_basics/full-list-of-territories-where-spotify-is-available/'>yep</a></td>
                <td><a href='https://support.google.com/googleplay/answer/2843119?hl=en'>yep</a></td>
                <td><a href='https://support.apple.com/en-us/HT204956'>yep</a></td>
                <td>nope, because p2p</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
