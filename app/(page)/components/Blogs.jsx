"use client"
import React from "react";
import BlogsAvatar1 from "@/public/blogs_avatar1.svg";
import BlogsAvatar2 from "@/public/blogs_avatar2.svg";
import BlogsAvatar3 from "@/public/blogs_avatar3.svg";
import Image from "next/image";
import Gallery1 from "@/public/gallery1.svg"
import Gallery2 from "@/public/gallery2.svg"
import Gallery3 from "@/public/gallery3.svg"
import Gallery4 from "@/public/gallery4.svg"
import Gallery5 from "@/public/gallery5.svg"


const Blogs = () => {



  return (
    <section className="container py-20 ">
      <div className="text-center my-10">
        <h1 className="font-grace text-2xl text-[#EEC044] font-normal">
          From the Blogs
        </h1>
        <p className="font-manrope text-5xl font-extrabold">
          News and Articles
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="relative">
          <Image src={BlogsAvatar1} />
          <div className="bg-white border border-black/5 shadow-[-5px_0px_10px_rgba(0,0,0,0.1)] rounded-l-[10px] rounded-md absolute bottom-[-20] left-32 p-5 px-17 ">
            <div>
              <p className=" font-manrope text-[20px] font-extrabold text-middle ">
                Kevin Smith
              </p>
              <p className="font-manrope text-end font-medium text-base text-gray-100">
                Farmer
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={BlogsAvatar2} />
          <div className="bg-white border border-black/5 shadow-[-5px_0px_10px_rgba(0,0,0,0.1)] rounded-l-[10px] rounded-md absolute bottom-[-20] left-32 p-5 px-17 ">
            <div>
              <p className=" font-manrope text-[20px] font-extrabold text-middle ">
                Jessica Brown
              </p>
              <p className="font-manrope text-end font-medium text-base text-gray-100">
                Farmer
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={BlogsAvatar3} />
          <div className="bg-white border border-black/5 shadow-[-5px_0px_10px_rgba(0,0,0,0.1)] rounded-l-[10px] rounded-md absolute bottom-[-20] left-32 p-5 px-17 ">
            <div>
              <p className=" font-manrope text-[20px] font-extrabold text-middle ">
                John Doe
              </p>
              <p className="font-manrope text-end font-medium text-base text-gray-100">
                Farmer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 my-8">
        <Image src={Gallery5}/>
        <Image src={Gallery2}/>
        <Image src={Gallery3}/>
        <Image src={Gallery4}/>
         <Image src={Gallery1}/>
      </div>
    </section>
  );
};

export default Blogs;
