import { Typography } from '@mui/material'
import React from 'react'

const MainNext = () => {
  return (
    <div className='main-next'>
      <div className="main-text">
        <Typography variant='body' component='h1' className='main-title'>Metabnb NFTs</Typography>
        <Typography variant='body' className='main-body'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</Typography>
        <button>Learn more </button>
      </div>
      <div className="main-image">
        <img src={require ('../assets/hero-footer.png')} alt='metaverse image' />
      </div>
    </div>
  )
}

export default MainNext