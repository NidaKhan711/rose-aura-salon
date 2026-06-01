import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/homesec/HeroSection'
import ServicesSection from './components/homesec/ServicesSection'
import ExperienceSection from './components/homesec/ExperienceSection'
import GallerySection from './components/homesec/GallerySection'
import TestimonialSection from './components/homesec/TestimonialSection'
import Footer from './components/Footer'
import BookingSection from './components/homesec/BookingSection'
import FinalCTASection from './components/homesec/FinalCTASection'
const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ServicesSection/>
      <ExperienceSection/>
      <GallerySection/>
      <TestimonialSection/>
      <FinalCTASection/>
      <BookingSection/>
      
    </>
  )
}

export default page