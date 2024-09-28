import React,{ useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/CartIcon.svg'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    const [menu,setMenu] = useState("Home");
  return (
    <div className='navbar'>
        <div className='logo'>
            <img  style={{ width: "100px", height: "auto" }} src={logo} alt="logo of the company" />
            <p >Farmily</p> 
        </div>
        <ul className='nav_menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"&&<hr/>}</li>
            <li onClick={()=>{setMenu("Standard")}}><Link style={{textDecoration:'none'}} to='/standard'>Standard</Link>{menu==="Standard"&&<hr/>}</li>
            <li onClick={()=>{setMenu("Organic")}}><Link style={{textDecoration:'none'}} to='/organic'>Organic</Link>{menu==="Organic"&&<hr/>}</li>
            <li onClick={()=>{setMenu("Sustainable")}}><Link style={{textDecoration:'none'}} to='/sustainable'>Sustainable</Link> {menu==="Sustainable"&&<hr/>}</li>
            <li onClick={()=>{setMenu("Fresh")}}><Link style={{textDecoration:'none'}} to='/fresh'>Fresh</Link> {menu==="Fresh"&&<hr/>}</li>
        </ul>
        <div className='login_and_cart_icon'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" style={{ width: "50px", height: "50px" }} /></Link>
            <div className="cart_count">0</div>
        </div>
    </div>
  )
}
