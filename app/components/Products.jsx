import Image from 'next/image'
import Onion from "@/public/onion.svg"
import React from 'react'

const Products = () => {
  return (
    <section className='my-30 container'>
      <h1 className='text-center font-grace text-2xl text-[#EEC044]'>Recently Added</h1>
      <p className='font-manrope font-extrabold text-center text-[48px]'>Latest Products</p>


      {/* here i design proudct card */}

     <div className='grid grid-cols-1 md:grid-cols-3'>
         <div className='bg-white/80'>
       <Image src={Onion}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Onlion</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
       <button className='bg-green-400 p-3 w-full text-[18px]'>Add to Cart</button>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Onion}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Onlion</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
       <button className='bg-green-400 p-3 w-full text-[18px]'>Add to Cart</button>
       </div>
       
      </div>
      <div className='bg-white/80'>
       <Image src={Onion}/>
       <div className='max-w-[370px] text-center'>
        <h1 className='font-manrope  font-extrabold text-[22px]'>Onlion</h1>
       <p className='font-manrope font-semibold  text-base text-[#4BAF47]'>$20</p>
       <button className='bg-green-400 p-3 w-full text-[18px]'>Add to Cart</button>
       </div>
       
      </div>
     </div>
    </section>
  )
}

export default Products
