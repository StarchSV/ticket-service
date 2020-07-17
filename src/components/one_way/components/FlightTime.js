import React from 'react'

export const FlightTime = ({duration, segments}) => {

  const departure = segments[0].departureDate
  const arrival = segments[segments.length - 1].arrivalDate

  const departureDate = new Date(departure).toLocaleString('ru', {
    formatMatcher: 'basic',
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  }).split(',').reverse().join(' ').trim()

  const arrivalDate = new Date(arrival).toLocaleString('ru', {
    formatMatcher: 'basic',
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  }).split(',').reverse().join(' ').trim()

  const departureTime = new Date(departure).toLocaleTimeString().slice(0, 5)
  const arrivalTime = new Date(arrival).toLocaleTimeString().slice(0, 5)

  const flightTime = ` ${Math.floor(duration / 60)} ч ${duration % 60} мин`

  return (
      <div className='row'>
        <div className="col-md-4">
          <span className='flight-time__time'>{departureTime}</span>
          <span className='ml-3 text-primary flight-time__date'>{departureDate}</span>
        </div>
        <div className='col-md-4 text-center align-self-center flight-time__duration'>&#128339;{flightTime}</div>
        <div className='col-md-4 text-right'>
          <span className='text-primary flight-time__date'>{arrivalDate}</span>
          <span className='flight-time__time ml-3'>{arrivalTime}</span>
        </div>
      </div>
  )
}