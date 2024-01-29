"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {

const [nav, setNav] = useState(false);

  return (
    <nav className="fixed z-10 flex justify-between w-full px-8 py-2 top-4">
      <div className="flex items-center gap-2 text-black sm:ml-16">
        <Image src="/Logo_Black.png" alt="KMF" height={80} width={110} />
      </div>
      <ul className="sm:flex hidden items-center text-black sm:mr-16">
        <li className="px-2 font-custom text-md ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 font-custom text-md">
          <Link href={"#festival"}>Venues</Link>
        </li>
        <li className="px-2 font-custom text-md">
          <Link href={"/about"}>About Us</Link>
        </li>
        <li className="px-2 font-custom text-md">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#733612] to-[#D9430D] text-white">
          <a href="/" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Home </a>
          <a href="#venues" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Venues </a>
          <a href="/about" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> About Us  </a>
          <a href="/gallery" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Gallery </a>
          <a href="/contact" className="px-4 cursor-pointer capitalize py-6 text-4xl font-custom"> Contact </a>
        </div>
      )}
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between px-5 py-5 bg-[#D9430D] rounded-full -translate-x-1/2 left-1/2 top-10"
    >
      <ul className="flex items-center">
        <li className="px-2 font-custom text-white text-md">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 font-custom text-white text-md">
          <Link href={"#festival"}>Venues</Link>
        </li>
        <li className="px-2 font-custom text-white text-md">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="px-2 font-custom text-white text-md">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};