import React from 'react'

const link = 'https://wizard.oracles.org/invest?addr=0x99c277634758b39df9d36965186D68836549E4F1&networkID=1'

export default () => (
  <div className="w3-container" id="about">
    <h3 className="w3-center">Also you can buy our token...</h3>
    <p className='w3-center'>...but we have no plans to use it in our application. It's just another way to donate.</p>
    <br />
    <div className="donate w3-center">
      <a className="w3-btn w3-purple izi-uppercase" href={link}>
        tokensale page
      </a>
    </div>
    <br />
  </div>
)