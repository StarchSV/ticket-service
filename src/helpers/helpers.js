export const flightsFilter = (flights, filterOptions) => {
  let sortedFlights = flights.slice()

  sortedFlights = transferFilters(filterOptions, flights)

  sortedFlights = costFilters(filterOptions, sortedFlights)

  sortedFlights = carriersFilter(filterOptions, sortedFlights)

  if (filterOptions.sort) {
    basicSort(filterOptions.sort, sortedFlights)
  }

  return sortedFlights
}



const basicSort = (typeOfSort, flightsToSort) => {
  switch (typeOfSort) {
    case 'ascendingPrice' :
      sortAscendingPrice(flightsToSort)
      break
    case 'descendingPrice' :
      sortDescendingPrice(flightsToSort)
      break
    case 'roadTime' :
      sortFlightTime(flightsToSort)
      break
  }
}

const sortAscendingPrice = flights => {
  flights.sort((a, b) => {
    return parseInt(a.flight.price.total.amount) - parseInt(b.flight.price.total.amount)
  })
}

const sortDescendingPrice = flights => {
  flights.sort((a, b) => {
    return parseInt(b.flight.price.total.amount) - parseInt(a.flight.price.total.amount)
  })
}

const sortFlightTime = flights => {
  flights.sort((a, b) => {
    return a.flight.legs.reduce((accum, item) => accum + item.duration , 0) - b.flight.legs.reduce((accum, item) => accum + item.duration , 0)
  })
}



const transferFilters = ({oneTransfer, withoutTransfer}, flightsToFilter) => {
  if (!oneTransfer && !withoutTransfer) {
    return flightsToFilter
  }
  if (oneTransfer && !withoutTransfer) {
    return flightsToFilter.filter(item => (
        item.flight.legs[0].segments.length === 2 && item.flight.legs[1].segments.length === 2
    ))
  }
  if (!oneTransfer && withoutTransfer) {
    return flightsToFilter.filter(item => (
        item.flight.legs[0].segments.length === 1 && item.flight.legs[1].segments.length === 1
    ))
  }
  if (oneTransfer && withoutTransfer) {
    return flightsToFilter
  }
}


const costFilters = ({minCost, maxCost}, flightsToFilter) => {
  return flightsToFilter.filter(item => parseInt(item.flight.price.total.amount) >= minCost && parseInt(item.flight.price.total.amount) <= maxCost)
}

const carriersFilter = ({carrierLOT, carrierAeroflot}, flightsToFilter) => {
  if (!carrierLOT && !carrierAeroflot) {
    return flightsToFilter
  }
  if (carrierLOT && !carrierAeroflot) {
    return flightsToFilter.filter(item => (
        item.flight.carrier.uid === 'LO'
    ))
  }
  if (!carrierLOT && carrierAeroflot) {
    return flightsToFilter.filter(item => (
        item.flight.carrier.uid === 'SU1'
    ))
  }
  if (carrierLOT && carrierAeroflot) {
    return flightsToFilter.filter(item => (
        item.flight.carrier.uid === 'LO' || item.flight.carrier.uid === 'SU1'
    ))
  }
}

