import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './long-hours-studying.css'

const LongHoursStudying = (props) => {
  return (
    <div className="long-hours-studying-container">
      <Helmet>
        <title>Long-Hours-Studying - Source Of Upliftment</title>
        <meta
          property="og:title"
          content="Long-Hours-Studying - Source Of Upliftment"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/studylong-1500w.webp"
        className="long-hours-studying-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default LongHoursStudying
