import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './get-to-study.css'

const GetToStudy = (props) => {
  return (
    <div className="get-to-study-container">
      <Helmet>
        <title>Get-To-Study - Source Of Upliftment</title>
        <meta
          property="og:title"
          content="Get-To-Study - Source Of Upliftment"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/gettostudy-1500w.webp"
        className="get-to-study-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default GetToStudy
