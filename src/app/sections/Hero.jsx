import Theme from "@/components/Theme";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="my-20 flex justify-center sm:mx-5" >
     <div className="flex flex-col">
     <div className="flex flex-col sm:flex-row">
     <div className="flex flex-col justify-center text-center mb-5 sm:mb-0">
      <h1 className="text-4xl font-custom tracking-[7px]">Kenya Music <br /><span>Festival 2024</span></h1>
     </div>
     <Theme />
     </div>
     <div className="flex items-center justify-center">
      <Image src="/home.jpg" alt="Home" className="rounded-lg" height={150} width={350} />
     </div>
    

     </div>
    </main>
  );
}
