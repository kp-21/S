import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LongHoursStudying from './views/long-hours-studying'
import SleepProblem from './views/sleep-problem'
import LandingPage from './views/landing-page'
import ExtraTimeWasting from './views/extra-time-wasting'
import SelfDoubt from './views/self-doubt'
import StudyLong from './views/study-long'
import GetToStudy from './views/get-to-study'
import LesserBreak from './views/lesser-break'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={LongHoursStudying}
          path="/long-hours-studying"
        />
        <Route exact component={SleepProblem} path="/sleep-problem" />
        <Route exact component={LandingPage} path="/" />
        <Route exact component={ExtraTimeWasting} path="/extra-time-wasting" />
        <Route exact component={SelfDoubt} path="/self-doubt" />
        <Route exact component={StudyLong} path="/study-long" />
        <Route exact component={GetToStudy} path="/get-to-study" />
        <Route exact component={LesserBreak} path="/lesser-break" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
