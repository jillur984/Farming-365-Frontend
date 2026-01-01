import Image from 'next/image'
import Testimonial1 from "@/public/testimonial1.svg"
import Testimonial2 from "@/public/testimonial2.svg"
import TestimonialAvatar1 from "@/public/testimonial_avatar1.svg"
import TestimonialAvatar2 from "@/public/testimonial_avatar2.svg"

const Testimonials = () => {
  return (
    <section className='container'>
        <div className='text-center my-10'>
            <h1 className='font-grace text-2xl text-[#EEC044] font-normal'>Our Testimonials</h1>
        <p className='font-manrope text-5xl font-extrabold'>What They Say</p>
        </div>
       <div className='grid grid-cols-2 relative gap-5'>
        <div className='col-span-1'>
            <Image src={Testimonial1} className='mx-15'/>
        </div>
        <div className='col-span-1'>
            <Image src={Testimonial2}/>
        </div>



        <div>
        <Image src={TestimonialAvatar1} className='absolute top-18  left-[-40]'/>
       </div>
       <div>
       <Image src={TestimonialAvatar2} className='absolute top-18 right-[540]'/>
       </div>

       </div>

      
    </section>
  )
}

export default Testimonials