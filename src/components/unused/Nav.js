import React, { Component } from 'react'

class Nav extends Component {

  getRecords = async () => {
    const api_call = await fetch(`https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"taxpayerNumber": 37247247242}`)
    const data = await api_call.json()
    console.log(data)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">Texas Alcohol App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form onSubmit={e => { e.preventDefault(); }} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={this.getRecords.bind(this)} className="btn btn-outline-success my-2 my-sm-0">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Nav
