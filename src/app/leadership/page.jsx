'use client'
import { motion } from 'framer-motion'

const Leadership = ({directionLeft}) => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      className="flex flex-col min-h-max sm:h-screen pt-32 pb-20 sm:pt-0 sm:pb-0  text-center sm:text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
          <h2 className="text-2xl sm:text-4xl text-center tracking-[8px] font-custom font-medium text-[#D82026] mb-4">Our Team</h2>
         <div className="grid grid-cols-1 mt-6 sm:mt-0 sm:grid-cols-4 gap-5 sm:h-[200px]">
         <div className="group relative flex flex-col items-center cursor-pointer">
          <motion.img
          initial={{
              x: directionLeft ? -100 : 100,
              opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{opacity: 1, x: 0}}
          src="/profile.svg"
          className="rounded-full border border-[#D9430D] object-cover w-24 h-24 sm:h-40 sm:w-40"
          />
          <h3 className='text-lg font-bold'> Name 1 </h3>
          <p className='text-red font-semibold'>Title 1</p>
        </div>
    <div className="group relative flex flex-col items-center cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{opacity: 1, x: 0}}
        src="/profile.svg"
        className="rounded-full border border-[#D9430D] object-cover w-24 h-24 sm:h-40 sm:w-40"
         />
        <h3 className='text-lg font-bold'>Name 2</h3>
        <p className='text-red font-semibold'>Title 2</p>
    </div>
    <div className="group relative flex flex-col items-center cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{opacity: 1, x: 0}}
        src="/profile.svg"
        className="rounded-full border border-[#D9430D] object-cover w-24 h-24 sm:h-40 sm:w-40"
         />
         <h3 className='text-lg font-bold'>Name 3</h3>
         <p className='text-red font-semibold'>Title 3</p>
    </div>
    <div className="group relative flex flex-col items-center cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{opacity: 1, x: 0}}
        src="/profile.svg"
        className="rounded-full border border-[#D9430D] object-cover w-24 h-24 sm:h-40 sm:w-40"
         />
        <h3 className='text-lg font-bold'>Name 4</h3>
        <p className='text-red font-semibold'>Title 4</p>
    </div>
         </div>
    </motion.div>
  )
}

export default Leadership