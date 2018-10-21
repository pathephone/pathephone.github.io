import React from 'react'

const toYouTubeVideoLink = (id) => (
  `https://www.youtube.com/watch?v=${id}`
)

export default ({ videos }) => (
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
            alt={vid.snippet.title}
          />
        </a>
      ))
    }
  </div>
)
