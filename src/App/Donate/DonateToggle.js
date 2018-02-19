import React from 'react'
import ReactToggle from 'react-toggle-view'
import MdClose from 'react-icons/lib/md/close'

const DonateToggle = ({ Icon, name, color }) => {
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
        <div className="w3-container">
          <button
            onClick={hideView}
            className="w3-button w3-display-topright"
          >
            <MdClose />
          </button>
          <p>Some text in the Modal..</p>
          <p>Some text in the Modal..</p>
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