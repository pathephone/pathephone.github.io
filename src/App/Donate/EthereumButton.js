import React from 'react'
import DonateToggle from './DonateToggle'
import EthereumIcon from './Icons/EthereumIcon'

import eth from './crypto/eth'

const EthereumButton = () => (
  <DonateToggle
    Icon={EthereumIcon}
    name='ethereum'
    color='blue'
    qrCode={eth.qrCode}
    address={eth.address}
    modalTitle='Donate Ethereum'
  />
)

export default EthereumButton
