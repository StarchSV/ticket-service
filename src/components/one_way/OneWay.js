import React from 'react'
import {FlightDirection} from "./components/FlightDirection";
import {FlightTime} from "./components/FlightTime";
import {Transfer} from "./components/Transfer";
import {Carrier} from "./components/Carrier";

export const OneWay = ({flightParams, carrier}) => {
  return (
    <div>
      <FlightDirection segments={flightParams.segments}/>
      <FlightTime duration={flightParams.duration} segments={flightParams.segments}/>
      {
        flightParams.segments.length - 1 ? <Transfer transfer={flightParams.segments.length - 1}/> : null
      }
      <Carrier carrier={carrier}/>
    </div>
  )
}