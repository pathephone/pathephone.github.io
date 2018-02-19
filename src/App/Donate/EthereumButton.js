import React from 'react'
import DonateToggle from './DonateToggle'
import EthereumIcon from './Icons/EthereumIcon'

const EthereumButton = () => (
  <DonateToggle
    Icon={EthereumIcon}
    name='ethereum'
    color='blue'
  />
)

export default EthereumButton
