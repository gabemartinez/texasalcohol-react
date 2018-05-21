import React from 'react'
import './App.css'

import Header from './components/Header'
import Report from './components/Report'
import Footer from './components/Footer'

require('dotenv').config()

class App extends React.Component {

  state = {
    barname: undefined,
    searchresultstotal: undefined,
    data: undefined,
    tabcPermitNumber: undefined,
    error: ""
  }

  async componentDidMount() {
    const api_request = await fetch(`https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"tabcPermitNumber": "MB726817"}`)
    const data = await api_request.json()
    this.setState({ barname: data[0].locationName, locationAddress: data[0].locationAddress, tabcPermitNumber: data[0].tabcPermitNumber, data: data, searchresultstotal: data.length, error: "" })
    console.log(this.state)
    console.log(this.state.barname)
  }

  // getDocuments = async (e) => {
  //   e.preventDefault()
  //   const barname = e.target.elements.barname.value.toUpperCase()
  //   console.log('Searched for: ' + barname.toUpperCase());
  //   const api_call = await fetch(`https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "^${barname}" }}`)
  //   const data = await api_call.json()
  //   if (barname) {
  //     console.log(data);
  //     this.setState({
  //       searchresultstotal: 666,
  //       searchresultsdata: 'hello',
  //       clickedbartaxid: 333,
  //       error: ""
  //     })
  //   } else {
  //     this.setState({
  //       searchresultstotal: undefined,
  //       searchresultsdata: undefined,
  //       clickedbartaxid: undefined,
  //       error: "Please enter a bar name."
  //     })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Report barname={this.state.barname} locationAddress={this.state.locationAddress} tabcPermitNumber={this.state.tabcPermitNumber} data={this.state.data} />
        <Footer />
      </div>
    )
  }

}

export default App
