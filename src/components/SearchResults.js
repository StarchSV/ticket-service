import React, {useContext, useEffect, useState} from 'react'
import {Card} from "./Card";
import {FlightContext} from "../context/flightContext";
import {Loader} from "./Loader";
import {flightsFilter} from "../helpers/helpers";

export const SearchResults = () => {
  const {loading, initialFlights, sortingOptions} = useContext(FlightContext)

  const [flightsToShow, setFlightsToShow] = useState(2)

  const [currentFlights, setCurrentFlights] = useState([])

  useEffect(() => {
    setCurrentFlights(flightsFilter(initialFlights, sortingOptions))
  }, [initialFlights, sortingOptions])

  const showMoreResults = () => {
    setFlightsToShow(flightsToShow + 2)
  }

  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Результаты поиска</h1>
      {
        loading
          ? <Loader/>
          : !currentFlights.length
            ? <div className='text-danger text-center'>Нет результатов</div>
            : <>
                {
                  currentFlights.slice(0, flightsToShow).map((flight, index) => {
                    return (
                        <Card flight={flight.flight}  key={index}/>
                    )
                  })
                }
                <div className='bg-secondary p-2 text-white text-center more-results__container' onClick={showMoreResults}>Показать ещё</div>
              </>
      }
    </div>
  )
}