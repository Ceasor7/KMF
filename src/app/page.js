import { InfiniteSlider } from '@/components/Carousel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AboutUs from './sections/AboutUs'
import Festival from './sections/Festival'
import Hero from './sections/Hero'

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <section id='hero'>
      <Hero />
      </section>
      <section id='about'>
        <AboutUs />
      </section>
      <section id='venues'>
      <Festival />
      </section>
      <section className='py-8'>
      <InfiniteSlider />
      </section>
      <Footer />
    </div>
  )
}

export default Home