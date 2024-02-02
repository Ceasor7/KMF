import { InfiniteSlider } from "@/components/Carousel"
import PartnershipSection from "../sections/PartnershipSection"

const Partnership = () => {
  return (
    <div className="mt-7">
    <section className="mt-16 bg-[#36600A]">
    <PartnershipSection />
    </section>
    <section className="py-5 my-2">
     <InfiniteSlider />
    </section>
  </div>
  )
}

export default Partnership