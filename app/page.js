import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Hero from './components/Hero'
import OurPolicy from './components/OurPolicy'
import Products from './components/Products'

const page = () => {
  return (
    <div className='overflow-clip'>
      <Navbar/>
      <Navbar2/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default page