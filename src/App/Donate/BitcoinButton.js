import React from 'react'
import DonateToggle from './DonateToggle'
import BitcoinIcon from './Icons/BitcoinIcon'

import btc from './crypto/btc'

const BitcoinButton = () => (
  <DonateToggle
    Icon={BitcoinIcon}
    name='bitcoin'
    color='deep-orange'
    qrCode={btc.qrCode}
    address={btc.address}
    modalTitle='Donate Bitcoin'
  />
)

export default BitcoinButton