import './Navbar.css'
import { assets } from '../../assets/assets'
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'><img className='logo' src={assets.logo} alt="logo"/></div>
        <div className='nav'>
            <ul>
                <li><Link to="/"><a href='#home'>Home</a></Link></li>
                <li><a href='#employee'>Employee</a></li>
                <li><a href='#footer'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
