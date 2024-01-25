'use client'
import ImageSlider from "@/components/ImageSlider";
import Theme from "@/components/Theme";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="mb-20 flex mt-28 justify-center sm:mx-5" >
     <div className="flex flex-col">
     <motion.div
      initial={{
            x: -500,
            opacity: 0,
            scale: 1
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.8 }}
      className="flex flex-col sm:space-x-20 sm:p-8 sm:mb-14 sm:flex-row">
     <div className="flex flex-col justify-center text-center sm:mb-4 mb-5 ">
      <h1 className="text-4xl font-custom tracking-[7px]">Kenya Music <br /><span>Festival 2024</span></h1>
     </div>
     <div className="h-full border-r-4 border-[#D82026]"></div>
     <Theme/>
     </motion.div>
     <motion.div
     initial={{
            x: 500,
            opacity: 0,
            scale: 1
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.8 }}
      className="flex items-center justify-center">
      <ImageSlider />
     </motion.div>
    

     </div>
    </main>
  );
}
