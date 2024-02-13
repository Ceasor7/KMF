import { InfiniteSlider } from "@/components/Carousel"
import PartnershipSection from "../sections/PartnershipSection"

const Partnership = () => {
  return (
    <div className="mt-12">
    <section className="mt-16 bg-[#36600A]">
    <PartnershipSection />
    </section>
      <section className="py-5 my-2">
        <h2 className="text-4xl my-6 text-center font-custom font-medium"> Current Partners </h2>
     <InfiniteSlider />
    </section>
  </div>
  )
}

export default Partnership