import React from 'react'

class Search extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.getDocuments}>
        <input type="text" name="barname" placeholder="Bar name..." />
        <button>Get records.</button>
      </form>
    )
  }
}

export default Search
