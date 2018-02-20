import React from 'react'
import osName from './osName'
import FaWindows from 'react-icons/lib/fa/windows'
import FaLinux from 'react-icons/lib/fa/linux'
import FaApple from 'react-icons/lib/fa/apple'
import MdDownload from 'react-icons/lib/md/file-download'

const assetsApiLink = 'https://api.github.com/repos/pathephone/pathephone-desktop/releases/latest'

const getTargetAsset = (assets) => {
  const handleFind = (asset) => {
    if (osName === 'Windows') {
      return asset.name.endsWith('.exe')
    } else 
    if (osName === 'MacOS') {
      return asset.name.endsWith('mac.zip') || asset.name.endsWith('.dmg')
    } else 
    if (osName === 'Linux') {
      return asset.name.endsWith('.rpm') || asset.name.endsWith('.deb') || asset.name.endsWith('.AppImage')
    }
  }
  return assets.filter(handleFind)
}

const getOsIcon = () => {
  if (osName === 'Windows') {
    return FaWindows
  } else 
  if (osName === 'MacOS') {
    return FaApple
  } else 
  if (osName === 'Linux') {
    return FaLinux
  }
}

class GetReleaseButton extends React.Component {
  state = {
    release: null
  }
  componentWillMount() {
    this.getLink()
  }
  getLink = async () => {
    try {
      const res = await fetch(assetsApiLink, { method: 'GET' })
      const release = await res.json()
      this.setState({ release })
    } catch (e) {
      console.error(e)
    }
  }
  render () {
    const { release } = this.state
    if (release === null) return null
    const { assets, name } = release
    const OsIcon = getOsIcon()
    const targetAssets = getTargetAsset(assets)
    if (targetAssets.length === 0) {
      return (
        <a className='w3-btn w3-border'
          href='https://github.com/pathephone/pathephone-desktop/releases/latest'
        >
          <MdDownload />
          <b className='w3-margin-left'>get latest release</b>
        </a>
      )
    } else {
      const view = []
      if (targetAssets.length === 1) {
        const { browser_download_url } = targetAssets[0]
        view.push(
          <a 
            key='download'
            className='w3-btn w3-border w3-margin'
            href={browser_download_url}
          >
            {
              OsIcon && (
                <OsIcon />
              )
            }
            <b className='w3-margin-left'>{name}</b>
          </a>
        )
      } else {
        const handleMap = ({ browser_download_url, name }) => {
          const splitedName = name.split('.')
          const extension = splitedName[splitedName.length - 1]
          return (
            <a 
              key={extension}
              className='w3-btn w3-border w3-margin'
              href={browser_download_url}
            >
              {
                OsIcon && (
                  <OsIcon />
                )
              }
              <b className='w3-margin-left'>{extension}</b>
            </a>
          )
        }
        view.push(
          <div key='version'>
            <b>{name}</b>
          </div>,
          <br key='space' />,
          <div className='w3-row' key='downloads'>
            {
              targetAssets.map(handleMap)
            }
          </div>
        )
      }
      view.push(
        <br key='space2'/>,
        <a
          key='redirect'
          href='https://github.com/pathephone/pathephone-desktop/releases/latest'
        >
          <small>other downloads</small>
        </a>
      )
      return view
    }
  }
}

export default GetReleaseButton