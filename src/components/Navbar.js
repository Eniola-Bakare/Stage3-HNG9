import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import ConnectModal from '../composition/ConnectModal'

const Navbar = () => {
  const [openModal, setopenModal] = useState(false)
  return (
      <header>
          <img src={logo} alt='logo image'/>
          <ul className='nav-link'>
            <Link to='/'>Home</Link>
            <Link to='/place-to-stay'>Place to stay</Link>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
          <button onClick={() => setopenModal(true) } className='nav-link'>Connect wallet</button>
          <ConnectModal open={openModal} onClose={() => setopenModal(false)} className='nav-link'/>
          <div className='hamburger' ></div>
      </header>
  )
}

export default Navbar