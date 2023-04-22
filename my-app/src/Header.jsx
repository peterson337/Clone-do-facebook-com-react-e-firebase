import React, {useState} from 'react'
import {FaFacebook, FaSearch, FaAlignJustify} from "react-icons/fa";

const Header = () => {
    
  return (    
    <div className='header'>
    <div className='headerLeft'>
      
        <div className='logo-fb'>
        <a href="#">
        <FaFacebook></FaFacebook></a>
        </div>

        <div className='search-fb'>
        <FaSearch/>
        </div>

        <div className='menu-fb'>
        <FaAlignJustify/>
        </div>
    </div>
    
    <div className='headerRight'>
      <div className='plusBtn'>
        +
      </div>
      </div>

      <div className='backgroundModal'>
        <div className='modal'>

        </div>
      </div>

  </div>  
  )
}

export default Header