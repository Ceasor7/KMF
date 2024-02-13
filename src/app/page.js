import { InfiniteSlider } from '@/components/Carousel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SummaryBackground from '@/components/SummaryBackground'
import Link from 'next/link'
import { FaRegEnvelope } from "react-icons/fa"
import CountDownClock from './sections/AboutUs'
import Hero from './sections/Hero'
import PerformanceVenue from './sections/PerformanceVenue'
import ImageSlider from '@/components/ImageSlider'

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <section id='hero'>
        <Hero />
        <ImageSlider />
      </section>
      <section>
        <SummaryBackground />
      </section>
      <section id='about' class="relative bg-fixed bg-parallax bg-cover">
        <CountDownClock />
      </section>
      <section id='venues' className="bg-[#36600A]">
      <PerformanceVenue />
      </section>
      <section className='py-8 '>
      <InfiniteSlider />
      </section>
      {/* <div>
      <Link href="/contact" className='flex flex-row items-center justify-center space-x-2 sm:hidden'>
      <p className='text-base font-custom'>Get in Touch</p>
      <FaRegEnvelope size={30} />
      </Link>
      </div> */}
      <Footer/>
    </div>
  )
}

export default Home