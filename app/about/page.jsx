import React from 'react'
import About_BG from "@/public/about_bg.svg"
import Image from 'next/image';

const About = () => {
  return (
    <section>
      <div className='relative'>
        <Image src={About_BG} alt='about_bg' />
        <div className='absolute flex flex-col inset-0 items-center justify-center'>
             <h1 className='font-manrope font-semibold text-[14px]'>HOME / ABOUT</h1>
         <p>About</p>
        </div>
      </div>
    </section>
  )
}

export default About;
