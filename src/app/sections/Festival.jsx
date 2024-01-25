import { InfiniteSlider } from "@/components/Carousel"
import DescriptionCard from "@/components/DescriptionCard"

const Festival = () => {
    return (
      <div className="min-h-screen flex justify-center flex-wrap gap-9 py-2 px-12 my-1 scroll-smooth ">
      <div className='flex flex-col justify-center text-center gap-6'>
          <h2 className='text-4xl tracking-[20px] font-custom font-medium text-black'>
          About <span className='text-[#D82026]'> Us </span>
        </h2>
      </div>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14">
        <DescriptionCard />
        <DescriptionCard />
        <DescriptionCard />
      </div>
    <hr className="text-black py-3 px-3"/>
    <InfiniteSlider />
    <hr/>
  </div>
     
    )
  }
  
  export default Festival