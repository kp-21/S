import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import './sleep-problem.css'

const SleepProblem = (props) => {
  return (
    <div className="sleep-problem-container">
      <Helmet>
        <title>Sleep-Problem - Source Of Upliftment</title>
        <meta
          property="og:title"
          content="Sleep-Problem - Source Of Upliftment"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/sleepproblem-1500w.webp"
        className="sleep-problem-image"
      />
      <Banner></Banner>
    </div>
  )
}

export default SleepProblem
