import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PropertiesListContainer from './containers/PropertiesListContainer'
import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="MainContent">
          <Router>
            <Switch>
              <Route path='/' >
                <PropertiesListContainer />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
