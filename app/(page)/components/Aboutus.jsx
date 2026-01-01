import React from "react";
import Tructor from "@/public/tructor.svg";
import Lady from "@/public/lady.svg";
import Tick from "@/public/tick.svg"
import Image from "next/image";

const Aboutus = () => {
  return (
    <section className="flex gap-32">
      <div className="relative w-full h-auto px-6">
        <Image src={Tructor} alt="tructor" />
        <div className="absolute top-70 left-[-90] ">
          <Image src={Lady} alt="lady" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-grace text-[#EEC044] font-normal text-2xl">Get to know us</h1>
        <p className="font-manrope font-extrabold text-5xl text-[#1F1E17]">The Best Agriculture Market</p>
        <p className="font-manrope font-bold text-[20px] text-blue-500">
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </p>
        <p className="font-manrope font-medium text-gray-100">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>
        <div className="flex flex-col gap-2">
         <div className="flex gap-3 items-center">
            <Image src={Tick} alt="tick"/>
            <p className="font-manrope font-bold text-[18px] text-[#1F1E17]">Suspe ndisse suscipit sagittis leo</p>
         </div>
         <div className="flex gap-3 items-center">
           <Image src={Tick} alt="tick"/>
            <p className="font-manrope font-bold text-[18px] text-[#1F1E17]">
                Entum estibulum disgnissim posuere
            </p>
         </div>
         <div className="flex gap-3 items-center">
           <Image src={Tick} alt="tick"/>
            <p className="font-manrope font-bold text-[18px] text-[#1F1E17]">Lorem Ipsum on the tend to repeat</p>
         </div>
         <button className="bg-blue-500 p-5 w-[40%] my-5 rounded-md text-white font-manrope font-bold text-[14px] ">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
