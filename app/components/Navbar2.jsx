import Image from 'next/image'
import React from 'react'
import Main_logo from "@/public/main_logo.svg"
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
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
    <section className=' flex justify-between items-center gap-10 py-10 bg-slate-400 '>
     <div className='container flex justify-between'>
        <div>
        <Image src={Main_logo}/>
     </div>
     <div className=''>
          <ul className="flex  gap-6">
          {menuItems.map((item) => (
            <li key={item?.name} className="hover:text-blue-400 transition-colors">
              <Link className='flex items-end gap-1' href={`/${item.name.toLowerCase() === "home" ? "" : item.name.toLowerCase()}`}>
                {item.name}
                 {item.dropdown && <IoIosArrowDown className="w-4 h-4 flex" />}
              </Link>
             
            </li>
          ))}
        </ul>
     </div>
     </div>
    </section>
  )
}

export default Navbar2