import React from 'react'
import BitcoinButton from './Donate/BitcoinButton'
import EthereumButton from './Donate/EthereumButton'
import BitcoinCashButton from './Donate/BitcoinCashButton'

export default () => (
  <div className="w3-container w3-margin-top" id="about">
    <h3 className="w3-center">Feel free to support</h3>
    <div className="donate w3-center w3-margin-top">
      <BitcoinButton />
      <EthereumButton />
      <BitcoinCashButton />
    </div>
  </div>
)