import React from 'react'
import DonateToggle from './DonateToggle'
import BitcoinIcon from './Icons/BitcoinIcon'

const BitcoinButton = () => (
  <DonateToggle
    Icon={BitcoinIcon}
    name='bitcoin'
    color='deep-orange'
  />
)

export default BitcoinButton