import { Grid, Paper } from '@mui/material'
import React from 'react'
import Images from './Images'

const ImageList = () => {
  return (
   
    <div>
      <Grid container className='image-div'>
        {
            Images.map((image, index) => {
              return(

                  <Paper key={index} className='paper'>
                    <Grid item xs={12} sm={6} md={3}>
                      <img src={image.link} />
                      <p>{image.name}</p>
                      {console.log(image.link)}
                    </Grid>
                  </Paper>
              
              )
            })
        }
      </Grid>
    </div>
  )
}

export default ImageList