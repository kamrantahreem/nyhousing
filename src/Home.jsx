import React from 'react'
import { Link } from 'react-router'
import Hero from './Hero'
import Features from './Features'
import FeaturedProperties from './FeaturedProperties'
import PopularLocations from './PopularLocations'
import CTA from './CTA'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
   <>
   <Hero/>
   <Features/>
   <FeaturedProperties/>
   <PopularLocations/>
   <CTA/>
   <Testimonials/>
   <Footer/>
   </>
  )
}

export default Home
