import Navbar from '@/components/Navbar'
import AboutUs from './sections/AboutUs'
import Festival from './sections/Festival'
import Gallery from './sections/Gallery'
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
      <section id='festival'>
      <Festival />
      </section>
      <section id='gallery'>
      <Gallery />
      </section>
    </div>
  )
}

export default Home