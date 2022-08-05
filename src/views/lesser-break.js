import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './lesser-break.css'

const LesserBreak = (props) => {
  return (
    <div className="lesser-break-container">
      <Helmet>
        <title>Lesser-Break - Source Of Upliftment</title>
        <meta
          property="og:title"
          content="Lesser-Break - Source Of Upliftment"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/lesserbreak-1500w.webp"
        className="lesser-break-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default LesserBreak
