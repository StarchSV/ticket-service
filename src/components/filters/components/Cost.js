import React, {useContext} from 'react'
import {FlightContext} from "../../../context/flightContext";

export const Cost = () => {

  const {minCostFilter, maxCostFilter} = useContext(FlightContext)

  return (
    <div className='container-fluid mb-5'>
      <h5>Цена</h5>
      <div className="form-group row">
        <label htmlFor="costMin" className="col-sm-2 col-form-label">От</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="costMin" onChange={minCostFilter}/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="costMax" className="col-sm-2 col-form-label">До</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="costMax" onChange={maxCostFilter}/>
        </div>
      </div>
    </div>
  )
}