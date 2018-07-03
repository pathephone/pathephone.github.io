import React from 'react'
import BitcoinButton from './Donate/BitcoinButton'
import EthereumButton from './Donate/EthereumButton'
import BitcoinCashButton from './Donate/BitcoinCashButton'

export default () => (
  <div className="w3-container" id="about">
    <h3 className="w3-center">Feel free to support</h3>
    <br />
    <div className="donate w3-center">
      <BitcoinButton />
      <EthereumButton />
      <BitcoinCashButton />
    </div>
    <br />
    <div className='w3-center'>
      <iframe title='yandex-wallet' src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=To%20support%20Pathephone%20development&targets-hint=&default-sum=&button-text=14&payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410015891281482" width="423" height="226" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
    </div>
  </div>
)