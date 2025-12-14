import Image from 'next/image'
import return_policy from "@/public/return_policy.svg"
import free_shipping from "@/public/free_shipping.svg"
import store_locator from "@/public/store_locator.svg"
import React from 'react'


const OurPolicy = () => {
  return (
    <section className='bg-white  shadow-[0_10px_60px_rgba(0,0,0,0.1)] rounded-[10px]'>
      <div className='flex gap-15 p-10'>
        <div className='flex items-center gap-6'>
            <div>
                <Image src={return_policy} />
            </div>
            <div className='font-manrope'>
                <h1 className='text-[20px] font-extrabold'>Return Policy</h1>
                <p>Money Back Gurantee</p>
            </div>
        </div>
         <div className='flex items-center gap-6'>
            <div>
                <Image src={free_shipping} />
            </div>
            <div className='font-manrope'>
                <h1 className='text-[20px] font-extrabold'>Free Shipping</h1>
                <p>On All Orders Over $45</p>
            </div>
        </div>
         <div className='flex items-center gap-6'>
            <div>
                <Image src={store_locator} />
            </div>
            <div className='font-manrope  '>
                <h1 className='text-[20px] font-extrabold'>Store Locator</h1>
                <p>Find your nearest store</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurPolicy