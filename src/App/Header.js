import React from 'react'
import logo from './logo.svg';

export default () => (
  <header className="w3-center w3-padding-64 w3-text-white">
    <img src={logo} className="app__logo" alt="logo" />
    <h1 className=''>Pathephone</h1>
    <p className='izi-uppercase'>audio player without limits</p>
    <br />
    <a className='w3-btn w3-orange izi-uppercase'
      href='https://github.com/pathephone/pathephone-desktop/releases/latest'
    >
      <b>Get latest release</b>
    </a>
  </header>
)