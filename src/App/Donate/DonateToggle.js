import React from 'react'
import ReactToggle from 'react-toggle-view'
import MdClose from 'react-icons/lib/md/close'
import Address from './Address'

const DonateToggle = ({ Icon, name, color, qrCode, address, modalTitle }) => {
  const Trigger = ({ showView }) => (
    <button className={`w3-button w3-text-${color}`} onClick={showView}>
      <Icon />
      <span className='w3-margin-left izi-uppercase'>
        {name}
      </span>
    </button>
  )

  const View = ({ hideView }) => (
    <div className="w3-modal izi-block">
      <div className="w3-modal-content">
        <div class={`w3-container w3-${color}`}>
          <button
            onClick={hideView}
            className="w3-button w3-display-topright"
          >
            <MdClose />
          </button>
          <h2 className=''>
            <Icon />
            <span className='w3-margin-left'>{modalTitle}</span>
          </h2>
        </div>
        <br />
        <div className="w3-container">
          <div>
            <img src={qrCode} alt='qr code' />
            <Address address={address} />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ReactToggle
      Trigger={Trigger}
      View={View}
    />
  )
}

export default DonateToggle