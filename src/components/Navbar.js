import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header>
        <img src={logo} alt='logo image'/>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/place-to-stay'>Place to stay</Link>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button>Connect wallet</button>
    </header>
  )
}

export default Navbar