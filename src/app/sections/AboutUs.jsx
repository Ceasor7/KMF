'use client'
import CountdownTimer from "@/components/CountdownTimer";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const CountDownClock = () => {

  const targetDate = '2024-12-31T23:59:59';

  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ['start 0.9','start 0.25']
  })

  useEffect ( () => {
    scrollYProgress.on("change", e=> console.log(e))
  }, [])

    return (
      <div className="flex flex-col min-h-screen">
      <div className="flex flex-col py-20 text-white sm:flex-row items-center sm:space-x-44 bg-[#36600A]">
      <div className="sm:ml-60">
      <h1 className="font-custom text-4xl sm:text-6xl">Count down </h1>
      </div>
      <div>
      <CountdownTimer targetDate={targetDate} />
      </div>
      </div>
      <motion.div
      ref={element}
      style={{opacity: scrollYProgress}}
       className="flex flex-col py-16 mb-5 mx-5 sm:mx-20 sm:px-12">
        <div className="mb-5">
        <h1 className="font-custom text-4xl text-center">Summary Background</h1>
        </div>
        <div className="flex items-center">
        <p className="font-custom leading-relaxed text-left sm:text-center">
        The Kenya Music Festival (KMF) is an annual talent development initiative overseen by the Ministry of Education and regarded as the largest festival of its kind in East and Central Africa. With over 600 competitive categories spanning music, dance, and elocution, it attracts more than 3 million participants from educational institutions nationwide, serving as a platform to instill positive values and address societal issues among the youth. His Excellency, The President of the Republic of Kenya, serves as the festival's Patron, while an Executive Committee appointed by the Cabinet Secretary manages its affairs, with technical support from the Directorate for Field Coordination and Co-curricular Activities. Since 1948, preliminary performances have been held at district (now county) and provincial (now regional) venues, culminating in a national event initially held at the Kenya National Theatre and later at the KICC in Nairobi. However, starting in 2006, the national level has been rotated among different regions to broaden accessibility.
        </p>
        </div>
      </motion.div>
  
      </div>
    )
  }
  
  export default CountDownClock