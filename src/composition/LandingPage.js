import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import HeroDivision from '../components/HeroDivision'
import MainNext from '../components/MainNext'
import Footer from '../components/Footer';
import ImageList from '../components/ImageList';
import { Stack } from '@mui/system';

const LandingPage = () => {
  return (
    <Stack direction='column'>
        <Navbar />
        <HeroSection />
        <HeroDivision />
        <ImageList />
        <MainNext />
        <Footer />
    </Stack>
  )
}

export default LandingPage