import React from 'react'

class SearchResults extends React.Component {

  render() {
    return (
      <div>
        { this.props.numberofresults && <p>Number of Results: {this.props.numberofresults}</p>}
        { this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default SearchResults
