import AboutDescriptionCard from "@/components/AboutDescriptionCard"

const PerfomanceVenue = () => {
    return (
      <div className="flex flex-col mb-10 mx-5 py-5 sm:mx-20 sm:px-12 ">
      <div className='flex flex-col justify-center text-center'>
          <h2 className='text-2xl tracking-[10px] font-custom font-medium text-white'>
          Perfomance<span className='text-white'> Venues </span>
        </h2>
      </div>
      <div className="mt-5 grid text-white lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14">
        <AboutDescriptionCard
        image="/KMF.jpg"
        title="Writers workshop"
        description="In November/December, there is usually the Writers’ Workshop to select set-pieces in music and elocution for the next year’s music festival and amend the guidelines to be used. Partners are invited to give the messages they wish to communicate to the society to be included in the guidelines during they writers workshop. Guidelines are developed and are always ready for circulation to all schools in Kenya in February every year. "
        //buttonLabel="Apply Here"
         />
        <AboutDescriptionCard
        image="/KMF.jpg"
        title="Adjudicators and trainers workshop"
        description="This workshop brings together adjudicators and trainers for capacity building and harmonization of themes and messages.  Partner/sponsors are given time to talk to the adjudicators and give them their expectations.   It also makes the participants analyze set pieces and the syllabus.   "
        //buttonLabel="Apply Here"
         />
        <AboutDescriptionCard
        image="/KMF.jpg"
        title="Competition"
        description="The competition proceeds through various stages beginning from the preliminary (Zonal Level) held in the month of May, through to the Sub-County, County, Regional and culminating at the National festival held annually in August."
        //buttonLabel="Apply Here"
         />
      </div>
  </div>
     
    )
  }
  
  export default PerfomanceVenue