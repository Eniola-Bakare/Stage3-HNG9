import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import HeroDivision from '../components/HeroDivision'
import MainNext from '../components/MainNext'
import Footer from '../components/Footer';
import ImageList from '../components/ImageList';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HeroDivision />
        <ImageList />
        <MainNext />
        <Footer />
    </div>
  )
}

export default LandingPage