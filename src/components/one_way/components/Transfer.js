import React from 'react'

export const Transfer = ({transfer}) => {
  return (
    <div className='row'>
      <div className="col-md-5 pl-5"><hr/></div>
      <div className="col-md-2 text-center text-success">{transfer} пересадка</div>
      <div className="col-md-5 pr-5"><hr/></div>
    </div>
  )
}