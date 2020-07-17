import {
  CARRIER_AEROFLOT_FILTER,
  CARRIER_LOT_FILTER,
  GET_ALL_FLIGHTS,
  SET_MAX_COST, SET_MIN_COST,
  SET_TRANSFER_FILTER_ONE_TRANSFER, SET_TRANSFER_FILTER_WITHOUT_TRANSFER,
  SORT_FLIGHTS
} from "./types";


const handlers = {
  [GET_ALL_FLIGHTS]: (state, {payload}) => ({...state, initialFlights: payload, flights: payload.slice(0, 2), loading: false}),
  [SORT_FLIGHTS]: (state, {payload}) => ({...state, sortingOptions: {...state.sortingOptions, sort: payload}}),
  [SET_TRANSFER_FILTER_ONE_TRANSFER]: (state) => ({...state, sortingOptions: {...state.sortingOptions, oneTransfer: !state.sortingOptions.oneTransfer}}),
  [SET_TRANSFER_FILTER_WITHOUT_TRANSFER]: (state) => ({...state, sortingOptions: {...state.sortingOptions, withoutTransfer: !state.sortingOptions.withoutTransfer}}),
  [SET_MIN_COST]: (state, {payload}) => ({...state, sortingOptions: {...state.sortingOptions, minCost: payload}}),
  [SET_MAX_COST]: (state, {payload}) => ({...state, sortingOptions: {...state.sortingOptions, maxCost: payload}}),
  [CARRIER_LOT_FILTER]: (state) => ({...state, sortingOptions: {...state.sortingOptions, carrierLOT: !state.sortingOptions.carrierLOT}}),
  [CARRIER_AEROFLOT_FILTER]: (state) => ({...state, sortingOptions: {...state.sortingOptions, carrierAeroflot: !state.sortingOptions.carrierAeroflot}}),
  DEFAULT: state => state
}


export const flightReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}