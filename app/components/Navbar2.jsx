import Image from 'next/image'
import React from 'react'
import Main_logo from "@/public/main_logo.svg"
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Container from './Container';

const Navbar2 = () => {
     const menuItems = [
    { name: "Home", dropdown: false },
    { name: "About", dropdown: false },
    { name: "Service", dropdown: true },   // Example: Service has dropdown
    { name: "Projects", dropdown: true },
    { name: "News", dropdown: false },
    { name: "Shop", dropdown: true },
    { name: "Contact", dropdown: false },
  ];
  return (
    <section className=' flex justify-between items-center gap-10 py-10'>
     <div className='container flex justify-between'>
        <div>
        <Image src={Main_logo}/>
     </div>
     <div className=''>
          <ul className="flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item?.name} className="hover:text-blue-400 transition-colors">
              <Link className='flex items-center font-semibold font-manrope gap-1 text-base' href={`/${item.name.toLowerCase() === "home" ? "" : item.name.toLowerCase()}`}>
                {item.name}
                 {item.dropdown && <IoIosArrowDown className="w-4 h-4 flex" />}
              </Link>
             
            </li>
          ))}
          <div className='text-2xl'><CiSearch/></div>
          <div className='text-2xl'><LuShoppingCart /></div>
        </ul>
     </div>
     </div>
    </section>
  )
}

export default Navbar2