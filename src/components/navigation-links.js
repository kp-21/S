import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text3}</span>
      <span className="navigation-links-text2">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'Ranker With Attempt',
  rootClassName: '',
  text3: 'Rastogi Did It In 2.5 Months',
  text4: 'Study 17 Hours A Day',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
