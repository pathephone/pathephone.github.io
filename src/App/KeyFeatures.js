import React from 'react'
import MdHq from 'react-icons/lib/md/high-quality'
import MdPlanet from 'react-icons/lib/fa/globe'
import MdDollar from 'react-icons/lib/md/attach-money'
import MdP2p from 'react-icons/lib/md/blur-on'
import MdNote from 'react-icons/lib/md/music-note'

const KeyFeature = ({ Icon, short, full }) => (
  <div className="key-feature w3-margin">
    <Icon className="w3-margin-bottom w3-jumbo" />
    <p className="w3-large">{short}</p>
    <p>{full}</p>
  </div>
)

export default () => (
  <div className="w3-container w3-margin-top" id="about">
    <br />
    <h3 className="w3-center">Imagine streaming application without a single server, yet able to discover music for you</h3>
    <p className="w3-center w3-large">Yeah, it sounds like a magic</p>
    <br />
    <hr />
    <div className="key-features w3-center w3-margin-top">
      <KeyFeature
        Icon={MdP2p}
        short='Completly serverless'
        full='There is no way to control, to block or even to shut down Pathephone network'
      />
      <KeyFeature
        Icon={MdHq}
        short='No quality limits'
        full='You are free to share and listen vynil quality music if you wish'
      />
      <KeyFeature
        Icon={MdNote}
        short='Unlimited music library'
        full='Any music shared by others is available to you, any music shared by you is available to others'
      />
      <KeyFeature
        Icon={MdPlanet}
        short='Available everywhere'
        full='No regional limits, works even behind Great Chinese Firewall'
      />
      <KeyFeature
        Icon={MdDollar}
        short='No fee'
        full='There is no one in control, and no one will ever charge a fee'
      />
    </div>
  </div>
)