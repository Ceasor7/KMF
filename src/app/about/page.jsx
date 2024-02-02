import Dates from "@/components/Dates"
import FestivalMotto from "@/components/FestivalMotto"
import FestivalObjectives from "@/components/FestivalObjectives"
import FullBackground from "@/components/FullBackground"
import VisionMission from "@/components/VisionMission"
import Achievement from "../sections/Achievement"
import Challenges from "../sections/Challenges"

const AboutUs = () => {
  return (
    <div className="flex flex-col bg-white">
    <div className="flex flex-col text-center mt-20 mx-5 sm:flex-row justify-between sm:mx-20 ">
      <div className="rounded-xl shadow-2xl px-10 py-10">
      <VisionMission
      title="Vision"
      description="To be the leading global establishment in the provision of quality training in the art forms of Music, Dance and Elocution. "
      />
      </div>
      <div className="rounded-xl shadow-2xl px-10 py-10">
      <VisionMission
      title="Mission"
      description="To identify, harness, nurture and expose talent and creativity through the art forms of Music, Dance and Elocution."
       />
      </div>
    </div>
    <div className="rounded-xl shadow-2xl px-10 py-10 mb-5">
    <FestivalMotto />
    </div>
    <div className=" bg-[#36600A]">
    <FestivalObjectives />
    </div>
    <div>
    <FullBackground />
    </div>
    <div className="bg-[#36600A]">
    <Dates />
    </div>
    <div>
    <Achievement />
    </div>
    <div className="bg-[#36600A]">
      <Challenges />
    </div>
    </div>
  )
}

export default AboutUs