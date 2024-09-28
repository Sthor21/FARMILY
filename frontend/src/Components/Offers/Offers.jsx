import React from 'react'
import '../Offers/Offers.css'
import offer_image from '../Assets/offer_banner.png'
export const Offers = () => {
  return (
    <div className='offer'>
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY FOR TODAY</p>
            <button>Check Now</button>
        </div>
        <div className="offer_right">
            <img src={offer_image} alt="" />
        </div>
    </div>

  )
}
