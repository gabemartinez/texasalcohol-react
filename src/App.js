import React from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header'
import HomeContainer from './components/HomeContainer'
import SearchContainer from './components/SearchContainer'
import ReportContainer from './components/ReportContainer'
import Footer from './components/Footer'

require('dotenv').config()

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/search" exact component={SearchContainer} />
            <Route path="/report/:reportId" exact component={ReportContainer} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }

}

export default App
