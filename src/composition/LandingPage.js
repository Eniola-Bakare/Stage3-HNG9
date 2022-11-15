import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import HeroDivision from '../components/HeroDivision'
import LandingMain from '../components/LandingMain';
import MainNext from '../components/MainNext'
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HeroDivision />
        <LandingMain />
        <MainNext />
        <Footer />
    </div>
  )
}

export default LandingPage