import React from 'react'

export const Carrier = ({carrier}) => {
  return (
    <div className='mb-3 carrier__container'>
      Рейс выполняет: {carrier.caption}
    </div>
  )
}