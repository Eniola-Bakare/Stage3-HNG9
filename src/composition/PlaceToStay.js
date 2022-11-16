import { Stack } from '@mui/system'
import React from 'react'
import Footer from '../components/Footer'
import HeadingConnect from '../components/HeadingPlace'
import ImageList2 from '../components/ImageList2'
import Navbar from '../components/Navbar'

const ConnectPage = () => {
  return (
    <Stack>
      <Navbar />
      <HeadingConnect />
      <ImageList2 />
      <Footer />
    </Stack>
  )
}

export default ConnectPage