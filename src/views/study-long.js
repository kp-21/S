import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './study-long.css'

const StudyLong = (props) => {
  return (
    <div className="study-long-container">
      <Helmet>
        <title>Study-Long - Source Of Upliftment</title>
        <meta property="og:title" content="Study-Long - Source Of Upliftment" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/gettostudy-1500w.webp"
        className="study-long-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default StudyLong
