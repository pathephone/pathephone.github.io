import React from 'react'
import DonateToggle from './DonateToggle'
import BitcoinIcon from './Icons/BitcoinIcon'

import bch from './crypto/bch'

const BitcoinButton = () => (
  <DonateToggle
    Icon={BitcoinIcon}
    name='bitcoin cash'
    color='brown'
    qrCode={bch.qrCode}
    address={bch.address}
    modalTitle='Donate Bitcoin Cash'
  />
)

export default BitcoinButton
