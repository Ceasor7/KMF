
const Contact = () => {
  return (
    <div className="h-screen relative flex flex-col max-w-7xl px-6 lg:px-12 justify-evenly mx-auto items-center">
      <div className="flex flex-col space-y-10">
        <h4 className="lg:text-4xl text-3xl font-semibold font-custom uppercase ">
          Get In Touch
        </h4>
        <form className="flex flex-col space-y-5 w-fit mx-auto">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-5">
            <input placeholder="Name" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="text" />
            <input placeholder="Email" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="email" />
          </div>
          <input placeholder="Subject" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="text" />

          <textarea placeholder="Message" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" />
          <button type="submit" className="bg-[#0c5d28] py-5 px-10 rounded-md text-white font-bold font-custom">Send</button>
        </form>
      </div>

    </div>
  )
}

export default Contact