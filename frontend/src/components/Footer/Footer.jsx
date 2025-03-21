import React from 'react'
import "./Footer.css"
import assets from '../../assets/assets'

const Footer = () => {



    return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere neque ad adipisci? Doloribus, placeat obcaecati?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>    
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>    
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 1278129810</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>    
        </div> 
        <hr />
        <p>Copyright 2025 Tomato.com - All Rights are Reserved.</p>   
    </div>
  )
}

export default Footer