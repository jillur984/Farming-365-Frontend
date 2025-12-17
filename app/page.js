import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Hero from './components/Hero'
import OurPolicy from './components/OurPolicy'
import Products from './components/Products'
import Healthy from './components/Healthy'
import HotDeal from './components/HotDeal'
import Organic from './components/Organic'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='overflow-clip'>
      <Navbar/>
      <Navbar2/>
      <Hero/>
      <Products/>
      <Healthy/>
      <HotDeal/>
      <Organic/>
      <Banner/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default page