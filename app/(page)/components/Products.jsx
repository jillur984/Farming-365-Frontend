"use client"

import Image from 'next/image'
import Onion from "@/public/onion.svg"
import Carrot from "@/public/carrot.svg"
import Tomato from "@/public/tomato.svg"
import Red_Grapes from "@/public/rad_grapes.svg"
import Garlic from "@/public/garlic.svg"
import Lettuce from "@/public/lettuce.svg"
import React from 'react'
import AddToCart from './AddToCart'
import Link from 'next/link'


const Products = () => {
  return (
    <section className='my-30 container cursor-pointer'>
      <h1 className='text-center font-grace text-2xl text-[#EEC044]'>Recently Added</h1>
      <p className='font-manrope font-extrabold text-center text-[48px]'>Latest Products</p>


      {/* here i design proudct card */}

     <div className='grid grid-cols-1 md:grid-cols-3'>
         <div className='bg-white/80'>
       <Image src={Onion}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Onlion</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
      
        <Link href="/login">
          <AddToCart/>
        </Link>
      
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Tomato}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Tomato</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
        <Link href="/login">
          <AddToCart/>
        </Link>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Carrot}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Carrot</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
        <Link href="/login">
          <AddToCart/>
        </Link>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Red_Grapes}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Red Grapes</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
      <Link href="/login">
          <AddToCart/>
        </Link>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Lettuce}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Lettuce</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
        <Link href="/login">
          <AddToCart/>
        </Link>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Garlic}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Garlic</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
        <Link href="/login">
          <AddToCart/>
        </Link>
       </div>
       
      </div>
     </div>
    </section>
  )
}

export default Products
