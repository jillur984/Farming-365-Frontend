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
    </div>
  )
}

export default page