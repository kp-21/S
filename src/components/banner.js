import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <div className="banner-btn-group">
        <Link
          to="/landing-page"
          className="banner-navlink button cursor-pointer"
        >
          {props.button}
        </Link>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  button: 'Home Page',
}

Banner.propTypes = {
  button: PropTypes.string,
}

export default Banner
