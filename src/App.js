import React from 'react'
import './App.css'

import Banner from './components/Banner'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

require('dotenv').config()

class App extends React.Component {

  state = {
    numberofresults: undefined,
    error: ""
  }

  getDocuments = async (e) => {
    e.preventDefault()
    const barname = e.target.elements.barname.value.toUpperCase()
    console.log('Searched for: ' + barname.toUpperCase());
    const api_call = await fetch(`https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "^${barname}" }}`)
    const data = await api_call.json()
    if (barname) {
      console.log(data);
      this.setState({
        numberofresults: data.length,
        error: ""
      })
    } else {
      this.setState({
        numberofresults: undefined,
        error: "Please enter a bar name."
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Search getDocuments={this.getDocuments} />
        <SearchResults
          numberofresults={this.state.numberofresults}
          error={this.state.error}
        />
      </div>
    )
  }

}

export default App
