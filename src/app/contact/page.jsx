
const Contact = () => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
              <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center uppercase tracking-[20px]">
                  Get In{" "}<span className="decoration-[#0c5d28]/50 underline">  Touch</span>{" "}
                </h4>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                  <div className="flex space-x-2">
                    <input placeholder="Name" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#0c5d28] placeholder-gray-500 transition-all focus:border-[#0c5d28]/40 focus:text-white hover:border-[#0c5d28]/40" type="text" />
                    <input placeholder="Email" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#0c5d28] placeholder-gray-500 transition-all focus:border-[#0c5d28]/40 focus:text-white hover:border-[#0c5d28]/40" type="email" />
                  </div>
                  <input placeholder="Subject" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#0c5d28] placeholder-gray-500 transition-all focus:border-[#0c5d28]/40 focus:text-white hover:border-[#0c5d28]/40" type="text"/>

                  <textarea placeholder="Message" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#0c5d28] placeholder-gray-500 transition-all focus:border-[#0c5d28]/40 focus:text-white hover:border-[#0c5d28]/40" />
                  <button type="submit" className="bg-[#0c5d28] py-5 px-10 rounded-md text-black font-bold">Submit</button>
                </form>
              </div>

    </div>
  )
}

export default Contact