import React, {useContext} from 'react'
import {FlightContext} from "../../../context/flightContext";

export const Airline = () => {

 const {carrierLOTFilter, carrierAeroflotFilter} = useContext(FlightContext)

  return (
    <div className='container-fluid'>
      <h5>Авиакомпания</h5>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="carrier1" onChange={carrierLOTFilter}/>
        <label className="custom-control-label" htmlFor="carrier1">LOT Polish Airlines</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="carrier2" onChange={carrierAeroflotFilter}/>
        <label className="custom-control-label" htmlFor="carrier2">Аэрофлот - российские авиалинии</label>
      </div>
    </div>
  )
}