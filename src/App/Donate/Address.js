import React from 'react'
import MdCopy from 'react-icons/lib/md/content-copy'

function selectElementText(el){
  var range = document.createRange() // create new range object
  range.selectNodeContents(el) // set range to encompass desired element text
  var selection = window.getSelection() // get Selection object from currently user selected text
  selection.removeAllRanges() // unselect any user selected text (if any)
  selection.addRange(range) // add range to Selection object to select it
  return selection
}

class Address extends React.Component {
  state = {
    copyied: null
  }
  handleCopyAddress = () => {
    selectElementText(this.addressNode)
    try {
      document.execCommand('copy');
      this.setState({ copyied: true })
    } catch (e) {
      this.setState({ copyied: false })
      console.error('Unable to copy address')
    }
  }
  render () {
    const { address } = this.props
    const { copyied } = this.state
    return(
      <div className='w3-padding'>
        <div className='w3-padding'>
          <p className='izi-multiline' ref={c => { this.addressNode = c }}>{address}</p>
          <button className='w3-button w3-border' onClick={this.handleCopyAddress}>
            <MdCopy />
            <span className='w3-margin-left'>copy to clipboard</span>
          </button>
        </div>
        {
          copyied === true ? (
            <span className='w3-text-green'>copied to clipboard</span>
          ) : copyied === false ? (
            <span className='w3-text-red'>unable to copy to clipboard, use Ctrl+C / Cmd+C</span>
          ) : null
        }
        <br />
      </div>
    )
  }
}

export default Address