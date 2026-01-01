import React from 'react'
import About_BG from "@/public/about_bg.svg"
import Image from 'next/image';
import Aboutus from '../components/Aboutus';

const About = () => {
  return (
    <section>
      <div className='relative'>
        <Image src={About_BG} alt='about_bg' />
        <div className='absolute flex flex-col inset-0 items-center justify-center'>
             <h1 className='font-manrope font-semibold text-[14px] text-white'>HOME / ABOUT</h1>
         <p className='font-manrope font-extrabold text-5xl text-white'>About</p>
        </div>
      </div>

      <div className='conatiner px-30 my-10'>
        <Aboutus/>
      </div>

    </section>
  )
}

export default About;
