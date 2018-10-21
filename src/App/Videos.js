import React from 'react'

import Spinner from './Videos/Spinner';
import VideosSlider from './Videos/VideosSlider';
import { LIVECODING_PLAYLIST_DATA_URL, LIVECODING_PLAYLIST_URL } from '../shared/constants';

const getYouTubeVideos = () => (
  fetch(LIVECODING_PLAYLIST_DATA_URL)
    .then(async r => {
      const data = await r.json()
      return data.items
    })
)

export default class Videos extends React.Component {
  state = {
    videos: null
  }
  componentDidMount() {
    getYouTubeVideos()
      .then(videos => {
        console.log(videos)
        this.setState({
          videos
        })
      })
      .catch(e => {
        console.error(e)
      })
  }
  render() {
    const { videos } = this.state;
    return(
      <div className="w3-center w3-padding w3-large">
        <h3 className="w3-center">See the live coding videos</h3>
        <p>Bugfixes and new features are implemented online</p>
        <br />
        {
          videos ? (
            <VideosSlider videos={videos} />
          ) : (
            <>
              <Spinner />
              <br />
            </>
          )
        }
        <a className='videos__playlist-link' href={LIVECODING_PLAYLIST_URL}>
          <small>see all the videos</small>
        </a>
      </div>
    )
  }
}