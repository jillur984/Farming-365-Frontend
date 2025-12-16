import Image from "next/image";
import healthy_bg from "@/public/bg_healthy.svg";
import React from "react";

const Healthy = () => {
  return (
    <div className="relative ">
      <div className="">
        <Image src={healthy_bg}/>
      </div>
     <div className="absolute  inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <h2 className=" font-manrope font-extrabold text-[50px] text-white text-center ">
        Be Healthy & Eat Fresh Organic Vagetables
      </h2>
      <button className=" rounded-md hover:bg-amber-300 hover:text-black bg-[#4BAF47] flex  p-5 text-white mx-auto px-10">Shop Now</button>
     </div>

      
    </div>
  );
};

export default Healthy;
