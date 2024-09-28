import React from 'react'
import '../Footer/Footer.css'
import logo from '../Assets/logo.svg'
import insta_icon from '../Assets/instagram_icon.png'
import linked_icon from '../Assets/linkedin_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer_logo">
            <img style={{ width: "100px", height: "auto" }}  src={logo} alt="" />
            <p>Farmily</p>
        </div>
        <ul className='footer_link'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer_social_icons">
            <div className="footer_icon_container">
                <img src={insta_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={linked_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
 )
}
