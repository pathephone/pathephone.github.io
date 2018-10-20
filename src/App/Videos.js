import React from 'react'

const YOUTUBE_API_KEY = 'AIzaSyBabmWNLPwH8WIdJmR59qdsGbAo07EXCAI'
const LIVECODING_PLAYLIST_ID = 'PLp0SCN_Va1MJluPu4eDRN3KtrN0XNN1-_'
const LIVECODING_PLAYLIST_DATA_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet,status&maxResults=3&playlistId=${LIVECODING_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
const LIVECODING_PLAYLIST_URL = `https://www.youtube.com/watch?v=m9fl8B-AGPU&list=${LIVECODING_PLAYLIST_URL}`

const toYouTubeVideoLink = (id) => (
  `https://www.youtube.com/watch?v=${id}`
)

const VideosSlider = ({ videos }) => (
  <div className='videos__slider'>
    {
      videos.map(vid => (
        <a
          key={vid.id} 
          className='videos__link' 
          href={toYouTubeVideoLink(vid.snippet.resourceId.videoId)}
          target='blank'
        >
          <img
            className='videos__thumbnail'
            src={vid.snippet.thumbnails.high.url}
          />
        </a>
      ))
    }
  </div>
)

const Spinner = () => (
  <strong>...</strong>
)

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
        <h3 className="w3-center">See the live coding sessions</h3>
        <p>Bugfixes and new features are implemented online</p>
        <br />
        {
          videos ? (
            <VideosSlider videos={videos} />
          ) : (
            <Spinner />
          )
        }
        {
          videos && (
            <a className='videos__playlist-link' href={LIVECODING_PLAYLIST_URL}><small>see all the videos</small></a>
          )
        }
      </div>
    )
  }
}