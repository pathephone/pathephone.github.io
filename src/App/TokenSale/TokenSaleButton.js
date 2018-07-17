import React from 'react'
import DonateToggle from './DonateToggle'
import BitcoinIcon from './Icons/BitcoinIcon'

import btc from './crypto/btc'

const TokenSaleButton = () => (
  <DonateToggle
    Icon={BitcoinIcon}
    name='bitcoin'
    color='pink'
    qrCode={btc.qrCode}
    address={btc.address}
    modalTitle='Donate Bitcoin'
  />
)

export default TokenSaleButton