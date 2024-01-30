'use client'
import { motion, useScroll } from "framer-motion"
import { useEffect, useRef } from "react"

const Achievement = () => {
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
     className="flex flex-col mb-4 mx-5 py-7 sm:mx-20 sm:px-12">
        <h2 className="text-2xl sm:text-4xl text-center tracking-[8px] font-custom font-medium text-[#D82026]">Achievement</h2>
        <p> 
        <ul>
            <li className="font-custom mt-2">1. Music has grown to higher levels attracting participants from EAC, Europe and India,</li>
            <li className="font-custom mt-2">2. We have managed to organize East African competition.</li>
            <li className="font-custom mt-2">3. Their a noticeable change in behavior after passing out messages on various pertinent issues through music ,dance and elocution</li>
            <li className="font-custom mt-2">4. Apart from singing and dancing we have incorporated elocution which included poems from English, Kiswahili, French, German, Arabic and Sign language,</li>
            <li className="font-custom mt-2">5. For the past three years we have managed to host the Kenya Music Festival National in one institution for proper coordination, management and fast delivery.</li>
        </ul>
        </p>
    </motion.div>
  )
}

export default Achievement