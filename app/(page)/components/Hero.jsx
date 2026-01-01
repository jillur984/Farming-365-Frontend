import React from 'react'
import HeroImage from "@/public/heroImage.svg"
import Image from 'next/image'
import OurPolicy from './OurPolicy'

const Hero = () => {
    
  return (
    <section className='w-full relative'>
          <Image className="w-full object-cover h-100 md:h-200"
        src={HeroImage}
        alt="Hero Image"
        
        priority 
      />

      <div className='absolute w-124 flex flex-col text-red left-16 top-40 md:left-92 md:top-49 text-4xl'>
        <h1 className='font-grace text-[60px] md:text-[130px] font-normal text-[#EEC044] text-start z-30'>Agriculture</h1>
        <div className='md:mt-[-30] z-10'>
            <p className='font-manrope font-black text-white text-[40px] md:text-[100px]'>& Organic</p>
        <p className='font-manrope font-black text-white text-[40px] md:text-[100px]  '>Market</p>
        </div>
        <button className='bg-[#4BAF47] font-manrope font-bold text-[14px] max-w-[170px] text-white p-6 rounded-md mt-4 cursor-pointer hover:bg-white hover:text-black '>Shop Now</button>
      </div>
      
   <div className='absolute bottom-[-70] rounded-md  left-92'>
      <OurPolicy/>
   </div>
    </section>
  )
}

export default Hero