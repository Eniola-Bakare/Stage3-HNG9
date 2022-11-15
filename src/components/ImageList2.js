import { Grid, Paper, Rating, Typography } from '@mui/material'
import {React, useState} from 'react'
import Images2 from './Images2'

const ImageList2 = () => {

  const [value, setValue] = useState(null)
  console.log({value})
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='imageList'>
      <Grid container className='image-div' rowSpacing={3} >
        {
            Images2.map((image, index) => {
              return(

                <Grid item xs={12} sm={6} md={3} className='grid-item'>
                  <Paper key={index} className='paper'>

                      <img src={image.link} />
                      {/* <p>{image.name}</p> */}
                      <div className="image-text">
                        <div className="left-text">
                          <p>Desert King</p>
                          <p>2345km away</p>
                          <Rating value={value} onChange={handleChange}  />
                        </div>
                        <div className="right-text">
                        <p >1MBT per night</p>
                        <p>available for 2weeks stay</p>
                        </div>
                      </div>
                  </Paper>
                </Grid>
              
              )
            })
        }
      </Grid>
    </div>
  )
}

export default ImageList2