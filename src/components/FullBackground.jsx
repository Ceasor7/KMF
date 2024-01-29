import Button from "./button"

const FullBackground = () => {
  return (
    <div className="flex flex-col py-7 mb-5 mx-5 sm:mx-20 sm:px-12">
    <h2 className='text-2xl sm:text-4xl text-center tracking-[8px] font-custom font-medium text-[#D82026]'> Full Background</h2>
    <div>
    <h3 className="font-custom font-semibold">About</h3>
    <p className="font-custom leading-relaxed">
    The Kenya Music Festival (KMF) is an annual performance-based talent development programme organized by the Ministry of Education.  
    KMF is the largest documented festival in the whole of East and Central Africa. Due to its popularity, the festival is one of the most effective media of inculcating positive values amongst the youth and passing messages on pertinent issues to the society. Featuring over 600 competitive genres of music, dance and elocution, it assembles over 3 million participants drawn from schools, colleges, universities and other institutions of learning across the country.
    </p>
    </div>
    <div>
    <h3 className="font-custom font-semibold">Management Of the Festival</h3>
    <p className="font-custom leading-relaxed">
    The festival is privileged to have His Excellency, The President of the Republic of Kenya as its Patron. It is managed by an Executive Committee appointed by the Cabinet Secretary- Ministry of Education, with the Executive Secretary being the technical officer from the Directorate for Field Coordination and Co-curricular Activities.   
    </p>
    </div>
    <div>
    <h3 className="font-custom font-semibold">Performance Venues</h3>
    <p className="font-custom leading-relaxed mb-4">
    From the time the Ministry of Education took over the running of festival in 1948, Performances for preliminary levels were hosted and selected district (now county) and provincial (now regional) venues, with the national level being initially held at the Kenya National Theatre and later at the KICC in Nairobi.  In bid to take music to the people, in was decided that from 2006 the national level would be hosted in different regions on rotational basis. 
    </p>
    <Button>More Details</Button>
    </div>
    </div>
  )
}

export default FullBackground