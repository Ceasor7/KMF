'use client'
import CountdownTimer from "@/components/CountdownTimer";
import { useScroll } from "framer-motion";
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
      <div className="flex flex-col">
      <div className="flex flex-col py-20 text-white sm:flex-row items-center sm:space-x-44">
      <div className="sm:ml-60">
      <h1 className="font-custom text-4xl sm:text-6xl">Count down </h1>
      </div>
      <div>
      <CountdownTimer targetDate={targetDate} />
      </div>
      </div>  
      </div>
    )
  }
  
  export default CountDownClock