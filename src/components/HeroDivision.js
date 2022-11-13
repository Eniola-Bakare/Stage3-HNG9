import React from 'react'
import mbtoken from '../assets/mb-token.png'
import metamask from '../assets/meta-mask.png'
import opensea from '../assets/open-sea.png'

const HeroDivision = () => {
  return (
    <div className='hero-div'>
        <img src={mbtoken} />
        <img src={metamask} />
        <img src={opensea} />
    </div>
  )
}

export default HeroDivision