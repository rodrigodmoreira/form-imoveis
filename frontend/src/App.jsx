import React from 'react'

import PropertiesListContainer from './containers/PropertiesListContainer'
import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="MainContent">
          <PropertiesListContainer />
        </div>
      </div>
    )
  }
}

export default App
