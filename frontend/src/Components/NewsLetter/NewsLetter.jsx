import React from 'react'
import '../NewsLetter/NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='news_letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
