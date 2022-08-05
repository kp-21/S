import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './extra-time-wasting.css'

const ExtraTimeWasting = (props) => {
  return (
    <div className="extra-time-wasting-container">
      <Helmet>
        <title>Extra-Time-Wasting - Source Of Upliftment</title>
        <meta
          property="og:title"
          content="Extra-Time-Wasting - Source Of Upliftment"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/extratimewasting-1500w.webp"
        className="extra-time-wasting-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default ExtraTimeWasting
