import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './self-doubt.css'

const SelfDoubt = (props) => {
  return (
    <div className="self-doubt-container">
      <Helmet>
        <title>Self-Doubt - Source Of Upliftment</title>
        <meta property="og:title" content="Self-Doubt - Source Of Upliftment" />
      </Helmet>
      <NavigationLinks1 rootClassName="navigation-links1-root-class-name8"></NavigationLinks1>
      <div className="self-doubt-banner">
        <div className="self-doubt-btn-group"></div>
      </div>
      <Link
        to="/landing-page"
        className="self-doubt-navlink button cursor-pointer"
      >
        Home Page
      </Link>
    </div>
  )
}

export default SelfDoubt
