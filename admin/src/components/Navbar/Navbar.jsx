import React from 'react'
import "./Navbar.css"
import assest from '../../assets/assets.js'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assest.logo} />
        <img className ="profile" src={assest.profile_image} alt="" />

    </div>
  )
}

export default Navbar