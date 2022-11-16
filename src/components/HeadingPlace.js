import { Button } from '@mui/material'

import TuneIcon from '@mui/icons-material/Tune';
import React from 'react'

const HeadingPlace = () => {
  return (
    <div className='place-heading' >
      <ul className='location-list' >
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast city</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>

      </ul>
      
      <Button variant='contained' endIcon={<TuneIcon />}>Location</Button>
    </div>
  )
}

export default HeadingPlace