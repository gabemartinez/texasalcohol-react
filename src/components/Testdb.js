import React, { Component } from 'react'

class Testdb extends Component {

  getRecords = async () => {
    const api_call = await fetch(`https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"taxpayerNumber": 32063212255}`)
    const data = await api_call.json()
    console.log(data)
  }

  render() {
    return (
      <div><button onClick={this.getRecords.bind(this)}>Click me</button></div>
    )
  }
}

export default Testdb
