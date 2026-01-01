import Image from "next/image";
import React from "react";
import WebImage from "@/public/main_logo_white.svg";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Explore_icon from "@/public/explore_icon.svg";
import Telephone from "@/public/telephone.svg";
import Message from "@/public/message.svg";
import Location from "@/public/location.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#24231D] p-15 ">
      <section className="container grid grid-cols-1 md:grid-cols-4 my-10">
        <div className="flex flex-col gap-4">
          <div>
            <Image src={WebImage} className="text-white" />
          </div>
          <p className="font-manrope font-medium text-base max-w-67.5 text-[#A5A49A]">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#A5A49A]">
            {/* Social Icons */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className=" hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className=" hover:text-blue-600 transition-colors" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className=" hover:text-red-600 transition-colors" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" hover:text-pink-500 transition-colors" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="border-b-4 border-b-blue-500 w-10 text-white font-manrope font-bold text-[20px] py-1">
            Explore
          </h1>

          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A] mt-2">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>About</li>
            </div>
          </ul>
          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A]">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>Services</li>
            </div>
          </ul>
          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A]">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>Our Products</li>
            </div>
          </ul>
          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A]">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>Meet the Farmers</li>
            </div>
          </ul>
          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A]">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>Latest News</li>
            </div>
          </ul>
          <ul className="font-manrope font-medium text-[15px] text-[#A5A49A]">
            <div className="flex items-center gap-2">
              <div>
                <Image src={Explore_icon} />
              </div>
              <li>Contact</li>
            </div>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="border-b-4 border-b-blue-500 w-10 font-bold font-manrope text-[20px] text-white ">
            News
          </h1>
          <div className="flex flex-col">
            <div className="mx-16">
              <h1 className="font-manrope font-bold text-base text-white">
                Bringing Food Production back to cities
              </h1>
              <p className="font-manrope font-normal text-[15px] text-[#EEC044]">
                July 5, 2022
              </p>
            </div>
            <div className="mx-16">
              <h1 className="font-manrope font-bold text-base text-white">
                The Future of Farming, Smart Irrigation Solutions
              </h1>
              <p className="font-manrope font-normal text-[15px] text-[#EEC044]">
                July 5, 2022
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="border-b-4 border-b-blue-500 w-15 font-bold font-manrope text-[20px] text-white">
            Contact
          </h1>
          <div className="flex gap-2">
            <Image src={Telephone} />
            <p className="text-[#A5A49A]">+8801611780984</p>
          </div>
          <div className="flex gap-2">
            <Image src={Message} />
            <p className="text-[#A5A49A]">jillur.cse.bd@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <Image src={Location} />
            <p className="text-[#A5A49A]">Suhila,Muktagacha,Mymensingh</p>
          </div>
          <div className="flex items-center w-65 bg-white rounded-md overflow-hidden shadow-md">
            {/* Input */}
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-3 outline-none text-gray-600 placeholder-gray-400"
            />

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 w-16 h-14 flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
