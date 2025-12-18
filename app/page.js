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


const page = () => {
  return (
    <div className='overflow-clip'>
      <Hero/>
      <Products/>
      <Healthy/>
      <HotDeal/>
      <Organic/>
      <Banner/>
      <Testimonials/>
      <Blogs/>
     
    </div>
  )
}

export default page