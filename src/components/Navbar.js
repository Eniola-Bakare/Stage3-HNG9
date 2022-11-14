import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header>
        <img src={logo} alt='logo image'/>
        <ul>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button>Connect wallet</button>
    </header>
  )
}

export default Navbar