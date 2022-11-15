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
    <div>
      <Grid container className='image-div'>
        {
            Images2.map((image, index) => {
              return(

                  <Paper key={index} className='paper'>
                    <Grid item xs={12} sm={6} md={3}>
                      <img src={image.link} />
                      {/* <p>{image.name}</p> */}
                      <div className="image-text">
                        <div className="left-text">
                          <Typography variant='body2'>Desert King</Typography>
                          <Typography variant='body2' >2345km away</Typography>
                          <Rating value={value} onChange={handleChange}  />
                        </div>
                        <div className="right-text">
                        <Typography variant='body2' >1MBT per night</Typography>
                        <Typography variant='body2' >available for 2weeks stay</Typography>
                        </div>
                      </div>
                    </Grid>
                  </Paper>
              
              )
            })
        }
      </Grid>
    </div>
  )
}

export default ImageList2