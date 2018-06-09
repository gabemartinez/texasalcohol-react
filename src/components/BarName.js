import React from 'react'

const BarName = (props) => {
    return (
        <div>
          <h3>TABC Permit Number: {props.tabcPermitNumber}</h3>
          <p>{props.barname}</p>
          <p>{props.locationAddress}</p>
          <p>{props.locationCity} {props.locationState} {props.locationZip}</p>
        </div>
    )
}

export default BarName
