import React from 'react'
import heroImg from '../assets/hero-img.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className="text">
            <p className='hero-title'>Rent a <span className='span'>Place</span> away from <span className='span'>Home</span> in the <span className='span'>Metaverse</span>  </p>
            <p className='hero-para'>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className="search-div">
                <input placeholder='Search for a location'  />
                <button>Search</button>
            </div>
        </div>
        <div className="img-hero">
            <img src={heroImg} />
        </div>
    </div>
  )
}

export default HeroSection