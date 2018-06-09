import React from 'react'

const BarName = (props) => {
    return (
        <div>
          <h2>{props.barname}</h2>
          <h6>{props.locationAddress}<br />{props.locationCity} {props.locationState} {props.locationZip}</h6>
          <h6>TABC Permit: {props.tabcPermitNumber}</h6>
        </div>
    )
}

export default BarName
