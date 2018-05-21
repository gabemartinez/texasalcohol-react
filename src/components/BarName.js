import React from 'react'

const BarName = (props) => {
    return (
        <div>
          <p>{props.barname}</p>
          <p>{props.locationAddress}</p>
          <p>TABC Permit Number: {props.tabcPermitNumber}</p>
        </div>
    )
}

export default BarName
