import React from 'react'
import "./Navigation.css"
import { FiHeart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Navigation = () => {
  return <nav>
    <div className='nav-container'>
      <input type="text" placeholder='Enter search...' />
    </div>
    <div className="profile-container">
      <FiHeart className='nav-icons'/>
      <FaUser className='nav-icons'/>
      <FaCartShopping className='nav-icons'/>
    </div>

  </nav>
  
}

export default Navigation
