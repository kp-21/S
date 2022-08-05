import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <h1 className="heading component-text">
        <span>
          Be
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text2">Motivated</span>
      </h1>
    </div>
  )
}

export default AppComponent
