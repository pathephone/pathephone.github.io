import React from 'react'
import roadmapData from './Roadmap/roadmapData'
import RoadmapStage from './Roadmap/RoadmapStage'

const handleExampleMap = (example, index) => (
  <RoadmapStage {...example} key={example.text} />
)

export default () => (
  <div className="w3-container w3-margin-top" id="about">
    <h3 className="w3-center">Roadmap</h3>
    <br />
    <div className="roadmap">
      {
        roadmapData.map(handleExampleMap)
      }
    </div>
  </div>
)