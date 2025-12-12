import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="bg-green-500  p-5.5  ">
      <div className="flex gap-8 container justify-between items-center">
        <div className="flex gap-4">
            <div className="flex items-center gap-4 text-sm text-white">
          <CiLocationOn className="text-white" />
          <p>99,Nandibari Road Muktagacha,Mymensingh</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-white" />
            <p className="text-sm text-white">farming.bd@gmail.com</p>
          </div>
        </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white">
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
    </section>
  );
};

export default Navbar;
