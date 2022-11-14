import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import HeroDivision from '../components/HeroDivision'
import LandingMain from '../components/LandingMain';
import MainNext from '../components/MainNext'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HeroDivision />
        <LandingMain />
        <MainNext />
    </div>
  )
}

export default LandingPage