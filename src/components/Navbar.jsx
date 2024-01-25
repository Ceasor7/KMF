'use client'
import Image from 'next/image';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-bblack[#F0F0F0] fixed top-0 z-0 ">
      <div>
        <Image src="/Logo_Black.png" alt="KMF Logo" width={90} height={50} />
      </div>
      <div className='hidden md:flex '>
        <a href="/" className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-700 duration-200 link-underline font-custom font-custom"> Home </a>
        <a href="/about" className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-700 duration-200 link-underline font-custom font-custom"> About </a>
        <a href="/festival" className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-700 duration-200 link-underline font-custom font-custom"> Festival </a>
        <a href="/gallery" className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-700 duration-200 link-underline font-custom font-custom"> Gallery </a>
        <a href="contact" className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-700 duration-200 link-underline font-custom font-custom"> Contact </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          <a href="/" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Home </a>
          <a href="/about" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> About </a>
          <a href="/festival" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Festival </a>
          <a href="/gallery" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Gallery </a>
          <a href="/contact" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Contact </a>
        </div>
      )}
    </div>
  )
}

export default Navbar