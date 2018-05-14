import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
// import Testdb from './components/Testdb'

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Testdb /> */}
      </div>
    )
  }
}

export default App
