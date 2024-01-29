import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-[#733612] text-white p-6 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        <div className="mb-4 sm:ml-28 sm:mb-4">
          <h2 className="text-lg font-semibold font-custom mb-2">Event Name</h2>
          <p className="text-sm font-custom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

      
       <div className="flex flex-row space-x-20 sm:space-x-72 sm:mr-44">
       <div className="mb-4 sm:mb-4">
          <h2 className="text-lg font-semibold font-custom mb-2">Quick Links</h2>
          <ul className="text-sm">
            <li className="mb-1 font-custom"><a href="#">Home</a></li>
            <li className="mb-1 font-custom"><a href="#">Events</a></li>
            <li className="mb-1 font-custom"><a href="#">About Us</a></li>
            <li className="mb-1 font-custom"><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="mb-4 sm:mb-4">
          <h2 className="text-lg font-semibold font-custom mb-2">Download</h2>
          <ul className="text-sm">
            <li className="mb-1 font-custom"><a href="#">Link 1</a></li>
            <li className="mb-1 font-custom"><a href="#">Link 2</a></li>
            <li className="mb-1 font-custom"><a href="#">Link 3</a></li>
            <li className="mb-1 font-custom"><a href="#">Link 4</a></li>
          </ul>
        </div>
       </div>
      </div>
      <div className=" text-center">
          <h2 className="text-lg font-semibold font-custom mb-2">Follow Us</h2>
          <div className="flex space-x-4 text-center justify-center ">
          <SocialIcon url="https://twitter.com" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://instagram.com" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://linkedIn" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://facebook.com" fgColor="white" bgColor="transparent" />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
