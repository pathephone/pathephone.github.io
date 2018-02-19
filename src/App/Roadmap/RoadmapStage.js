import React from 'react'

const RoadmapStage = ({ text, checked }) => (
  <div className={`roadmap__stage ${checked ? '--checked' : ''} w3-padding`}>
    <span key={text}>{text}</span>
  </div>
)

export default RoadmapStage