import Image from "next/image";
import Bg_Organic from "@/public/bg_organic.svg";
import Professional_Farmer from "@/public/professional_farmer.svg";

const Organic = () => {
  return (
    <section className="container grid grid-cols-2">
      <div className="col-span-1">
        <Image src={Bg_Organic} />
      </div>
      <div className="col-span-1">
        <h1 className="font-grace text-2xl text-[#EEC044]">Quality Products</h1>
        <h1 className="font-manrope font-extrabold text-[48px]">
          Only Organic Food
        </h1>
        <p className="font-manrope text-base font-medium text-gray-100">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word.
        </p>

        <div className="my-10">
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 ">
              <Image src={Professional_Farmer} />
              <div>
                <h1 className="font-manrope text-[22px] font-extrabold">
                  Professional Farmer
                </h1>
                <p className="font-manrope font-medium text-base text-gray-100">
                  There are many variation of passages of lorem ipsum.
                </p>
              </div>
            </div>
            <div className="flex gap-3 ">
              <Image src={Professional_Farmer} />
              <div>
                <h1 className="font-manrope text-[22px] font-extrabold">
                  Solution for Farming
                </h1>
                <p className="font-manrope font-medium text-base text-gray-100">
                  There are many variation of passages of lorem ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="rounded-md font-manrope font-bold text-[14px] px-14 hover:bg-amber-300 hover:text-black bg-[#4BAF47] flex  p-5 text-white ">Start Shopping Now</button>
      </div>
    </section>
  );
};

export default Organic;
