'use client'
import { motion, useScroll } from "framer-motion"
import { useEffect, useRef } from "react"

const Challenges = () => {

  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ['start 0.9','start 0.25']
  })

  useEffect ( () => {
    scrollYProgress.on("change", e=> console.log(e))
  }, [])

  return (
    <motion.div
    ref={element}
    style={{opacity: scrollYProgress}}
     className="flex flex-col mb-5 py-7 mx-5 sm:mx-20 sm:px-12">
        <h2 className="text-2xl sm:text-4xl text-center tracking-[8px] font-custom font-medium text-[#D82026]"> Challenges </h2>
        <ul>
            <li className="font-custom mt-2"> 1. Funding has been a big problem since the has really expanded.</li>
            <li className="font-custom mt-2"> 2. Some regions not bringing all the winners due to funds</li>
            <li className="font-custom mt-2"> 3. Some of the partners expressing their interest in using KMF as a platform to spread them to the public and once teachers and pupils start preparation at the end they do not honor their agreement of partnership.</li>
        </ul>
        <p className="font-custom leading-relaxed"> The festival has continued to grow and we look forward to greater achievements in the Kenyan Music festival.</p>
    </motion.div>
  )
}

export default Challenges