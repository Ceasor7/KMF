import CountdownTimer from "@/components/CountdownTimer";
import Theme from "@/components/Theme";

const AboutUs = () => {

  const targetDate = '2024-12-31T23:59:59';

    return (
      <div className="flex flex-col min-h-screen">
      <div className="flex flex-col py-20 text-white sm:flex-row items-center sm:space-x-44 bg-[#36600A]">
      <div className="sm:ml-60">
      <h1 className="font-custom text-4xl">Count down </h1>
      </div>
      <div>
      <CountdownTimer targetDate={targetDate} />
      </div>
      </div>
      <div className="flex flex-col sm:flex-row py-16 items-center justify-between">
        <div className="sm:ml-60">
        <h1 className="font-custom text-4xl">About Us</h1>
        </div>
        <div className="sm:mr-36">
        <Theme />
        </div>
      </div>
      <div className="bg-black my-5 px-4 text-white py-20">
      <div>
      <h1 className="font-custom text-4xl text-center">Our Mandate</h1>
      </div>
      <div className="sm:px-32 sm:mx-20">
      <p className="font-custom text-left"> Talent Development For The Growth Of The Creative Economy Talent Development For The Growth Of The Creative Economy Talent Development For The Growth Of The Creative Economy Talent Development For The Growth Of The Creative Economy</p>
      </div>       
      </div>
  
      </div>
    )
  }
  
  export default AboutUs