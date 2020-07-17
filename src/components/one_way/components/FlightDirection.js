import React from 'react'

export const FlightDirection = ({segments}) => {
  const departure = segments[0]
  const arrival = segments[segments.length - 1]

  return (
    <div className='mb-3 flight-direction__container'>
      <span>{departure.departureCity ? departure.departureCity.caption : 'город отправления'},&nbsp;</span>
      <span>{departure.departureAirport ? departure.departureAirport.caption : 'аэропорт отправления'}&nbsp;</span>
      <span className='text-primary'>({departure.departureAirport.uid})</span>
      <span className='ml-3 mr-3 text-primary'>&rarr;</span>
      <span>{arrival.arrivalCity ? arrival.arrivalCity.caption : 'город прибытия'},&nbsp;</span>
      <span>{arrival.arrivalAirport ? arrival.arrivalAirport.caption : 'аэропорт прибытия'}&nbsp;</span>
      <span className='text-primary'>({arrival.arrivalAirport.uid})</span>
    </div>
  )
}