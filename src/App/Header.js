import React from 'react'
import logo from './logo.svg';
import GetReleaseButton from './Header/GetReleaseButton'

export default () => (
  <header className="w3-center w3-padding-64 w3-text-white">
    <img src={logo} className="app__logo" alt="logo" />
    <h1 className=''>Pathephone</h1>
    <p className='izi-uppercase'>music player without limits</p>
    <br />
    <div>
      <GetReleaseButton />
    </div>
    <br />
  </header>
)