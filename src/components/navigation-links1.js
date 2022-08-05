import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <a
        href="https://qr.ae/pvueCP"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links1-link"
      >
        {props.text}
      </a>
      <a
        href="https://qr.ae/pvu4tQ"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links1-link1"
      >
        {props.text3}
      </a>
      <a
        href="https://youtu.be/koksK82_7hg"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links1-link2"
      >
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text4: 'Study 17 Hours A Day',
  text3: 'Rastogi Did It In 2.5 Months',
  text: 'Ranker With Attempt',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
