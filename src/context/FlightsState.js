import React, {useEffect, useReducer} from 'react'
import {FlightContext} from "./flightContext";
import {flightReducer} from "./flightReducer";
import {
  CARRIER_AEROFLOT_FILTER,
  CARRIER_LOT_FILTER,
  GET_ALL_FLIGHTS, SET_MAX_COST, SET_MIN_COST,
  SET_TRANSFER_FILTER_ONE_TRANSFER,
  SET_TRANSFER_FILTER_WITHOUT_TRANSFER,
  SORT_FLIGHTS
} from "./types";

export const FlightState = ({children}) => {

  let initialState = {
    initialFlights: [],
    flights: [],
    outputResults: 2,
    sortingOptions: {
      sort: '',
      oneTransfer: false,
      withoutTransfer: false,
      minCost: 0,
      maxCost: 300000,
      carrierLOT: false,
      carrierAeroflot: false
    },
    loading: true
  }

  const [state, dispatch] = useReducer(flightReducer, initialState)



  useEffect(() => {
    fetch('./content/flights.json')
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: GET_ALL_FLIGHTS,
          payload: result.result.flights
        })
      })
  }, [])

  const sortFlights = id => {
    dispatch({
      type: SORT_FLIGHTS,
      payload: id
    })
  }

  const transferFilterOneTransfer = () => {
    dispatch({
      type: SET_TRANSFER_FILTER_ONE_TRANSFER,
    })
  }

  const transferFilterWithoutTransfer = () => {
    dispatch({
      type: SET_TRANSFER_FILTER_WITHOUT_TRANSFER,
    })
  }

  const minCostFilter = event => {
    dispatch({
      type: SET_MIN_COST,
      payload: +event.target.value
    })
  }

  const maxCostFilter = event => {
    dispatch({
      type: SET_MAX_COST,
      payload: event.target.value ? +event.target.value : 300000
    })
  }

  const carrierLOTFilter = () => {
    dispatch({
      type: CARRIER_LOT_FILTER
    })
  }

  const carrierAeroflotFilter = () => {
    dispatch({
      type: CARRIER_AEROFLOT_FILTER
    })
  }

  const {initialFlights, flights, loading, sortingOptions} = state

  return (
    <FlightContext.Provider value={{
      initialFlights, flights, loading, sortingOptions, sortFlights, transferFilterOneTransfer, transferFilterWithoutTransfer,
      minCostFilter, maxCostFilter, carrierLOTFilter, carrierAeroflotFilter
    }} >
      {children}
    </FlightContext.Provider>
  )
}