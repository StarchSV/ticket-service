import React, {useContext} from 'react'
import {FlightContext} from "../../../context/flightContext";

export const Filter = () => {

  const {transferFilterOneTransfer, transferFilterWithoutTransfer} = useContext(FlightContext)

  return (
    <div className='container-fluid mb-5'>
      <h5>Фильтровать</h5>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="oneTransfer" onChange={transferFilterOneTransfer}/>
          <label className="custom-control-label" htmlFor="oneTransfer">- 1 пересадка</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="withoutTransfer" onChange={transferFilterWithoutTransfer}/>
          <label className="custom-control-label" htmlFor="withoutTransfer">- без пересадок</label>
      </div>
    </div>
  )
}