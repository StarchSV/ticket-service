import React, {useContext} from 'react'
import {FlightContext} from "../../../context/flightContext";

export const Sort = () => {

  const {sortFlights} = useContext(FlightContext)

  const onSortTypeChange = event => {
    sortFlights(event.target.id)
  }

  return (
    <div className='container-fluid mb-5'>
      <h5>Сортировать</h5>
      <div className="custom-control custom-radio">
        <input type="radio" id="ascendingPrice" name="customRadio" className="custom-control-input" onClick={onSortTypeChange}/>
        <label className="custom-control-label" htmlFor="ascendingPrice">- по возрастанию цены</label>
      </div>
      <div className="custom-control custom-radio">
        <input type="radio" id="descendingPrice" name="customRadio" className="custom-control-input" onClick={onSortTypeChange}/>
        <label className="custom-control-label" htmlFor="descendingPrice">- по убыванию цены</label>
      </div>
      <div className="custom-control custom-radio">
        <input type="radio" id="roadTime" name="customRadio" className="custom-control-input" onClick={onSortTypeChange}/>
        <label className="custom-control-label" htmlFor="roadTime">- по времени в пути</label>
      </div>
    </div>
  )
}