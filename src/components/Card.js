import React from 'react'
import {Header} from "./one_way/components/Header";
import {Confirm} from "./one_way/components/Confirm";
import {OneWay} from "./one_way/OneWay";

export const Card = ({flight}) => {
  return (
    <div className='mb-5'>
      <Header price={flight.price}/>
      <OneWay flightParams={flight.legs[0]} carrier={flight.carrier}/>
      <hr style={{color: 'blue', backgroundColor: 'blue'}}/>
      <OneWay flightParams={flight.legs[1]} carrier={flight.carrier}/>
      <Confirm/>
    </div>
  )
}