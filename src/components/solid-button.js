import React from 'react'

import PropTypes from 'prop-types'

import './solid-button.css'

const SolidButton = (props) => {
  return (
    <div className="solid-button-container">
      <button className="cursor: pointer; cursor-pointer">
        {props.button}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  button: 'Button',
}

SolidButton.propTypes = {
  button: PropTypes.string,
}

export default SolidButton
