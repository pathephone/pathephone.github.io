import React from 'react'
import MdTwitter from 'react-icons/lib/fa/twitter'
import MdMail from 'react-icons/lib/md/mail'
import MdGithub from 'react-icons/lib/go/mark-github'

export default () => (
  <div className="w3-center w3-padding w3-large">
    <a className='w3-margin' href=''>
      <MdMail />
      <span className='w3-margin-left'>
        pathephone.player@gmail.com
        </span>
    </a>
    <a className='w3-margin izi-nowrap' href='https://github.com/pathephone'>
      <MdGithub />
      <span className='w3-margin-left'>
        @pathephone
      </span>
    </a>
    <a className='w3-margin izi-nowrap' href='https://twitter.com/patheplayer'>
      <MdTwitter />
      <span className='w3-margin-left'>
        @patheplayer
        </span>
    </a>
  </div>
)