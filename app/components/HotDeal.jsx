import Image from "next/image";
import Lettuce from "@/public/lettuce.svg";
import Carrot from "@/public/carrot.svg"
import Tomato from "@/public/tomato.svg"
import SSS from "@/public/sss.svg";
import Onion from "@/public/onion.svg";
import React from "react";

const HotDeal = () => {
  return (
    <div className="container my-38 cursor-pointer">
      <h1 className="text-center font-manrope text-[48px] font-extrabold">
        Today's Hot Deal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className=" max-w-67">
          <div className="bg-white/80  text-start">
            <Image src={Onion} />
            <div className=" text-start">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-manrope font-extrabold text-[22px]">
                    Onion
                  </h1>
                  <p className="font-manrope font-semibold  text-base text-[#4BAF47]">
                    $20
                  </p>
                </div>
                <Image src={SSS} />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-67">
          <div className="bg-white/80  text-start">
            <Image src={Lettuce} />
            <div className=" text-start">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-manrope font-extrabold text-[22px]">
                    Lettuce
                  </h1>
                  <p className="font-manrope font-semibold  text-base text-[#4BAF47]">
                    $20
                  </p>
                </div>
                <Image src={SSS} />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-67">
          <div className="bg-white/80  text-start">
            <Image src={Tomato} />
            <div className=" text-start">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-manrope font-extrabold text-[22px]">
                    Tomato
                  </h1>
                  <p className="font-manrope font-semibold  text-base text-[#4BAF47]">
                    $20
                  </p>
                </div>
                <Image src={SSS} />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-67">
          <div className="bg-white/80  text-start">
            <Image src={Carrot} />
            <div className="">
              <div className="flex justify-between ">
                <div>
                  <h1 className="font-manrope font-extrabold text-[22px]">
                    Carrot
                  </h1>
                  <p className="font-manrope font-semibold  text-base text-[#4BAF47]">
                    $20
                  </p>
                </div>
                <Image src={SSS}  />
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HotDeal;
