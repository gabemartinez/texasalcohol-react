import React from 'react'

const BarName = (props) => {
    return (
        <div>
          <p>{props.barname}</p>
          <p>{props.locationAddress}</p>
          <p>Bar Details</p>
        </div>
    )
}

export default BarName
