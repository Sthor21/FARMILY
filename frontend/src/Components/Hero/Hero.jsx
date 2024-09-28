import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
export const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>Experience the Freshness</h2>
            <div>
                <p>Direct from Farm to Your Table!</p>
            </div>
            <div className="hero_fresh_button">
                <div style={{background:'#674188'}} onClick={()=>{navigate('/fresh');}}>Order Now</div>
            </div>
        </div>
        <div className="hero_right">
            <img   src="https://wallpapercave.com/wp/wp4184149.jpg" alt="" />

        </div>

    </div> )
}
