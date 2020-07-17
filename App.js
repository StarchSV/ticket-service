import React from 'react'
import {SearchResults} from "./src/components/SearchResults"
import {FlightState} from "./src/context/FlightsState"
import {Filters} from "./src/components/filters/Filters";

export const App = () => {

  return (
    <FlightState>
      <div className='container'>
        <div className="row">
          <div className="col-md-3">
            <Filters/>
          </div>
          <div className="col-md-9">
            <SearchResults/>
          </div>
        </div>
      </div>
    </FlightState>
  )
}