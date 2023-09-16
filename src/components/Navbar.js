import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "phosphor-react";
import './nvabar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/' >home</Link> 
            <Link to='/cart' ><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar