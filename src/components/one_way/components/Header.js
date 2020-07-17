import React from 'react'

export const Header = ({price}) => {
  return (
    <div className='row bg-primary text-white mb-3'>
      <div className="col-md-3 header__logo--container">
        <span className='header__logo--helper'/>
        <img src='../../../../content/images/plane.png' alt='самолет' className='header__logo--logo'/>
      </div>
      <div className="col-md-9 text-right">
        <h2>{price.total.amount} &#8381;</h2>
        <p>Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  )
}