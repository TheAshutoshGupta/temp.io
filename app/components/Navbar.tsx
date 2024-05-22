import Image from "next/image";
import logo from "../public/logo.png";

export default function Navbar() {

  return (
    <div className="w-full h-14 bg-black">
        <div className="max-w-5xl mx-auto min-w-screen h-full flex justify-between items-center"> 
        <div>
        <Image src="/logo.png" alt="logo" width={100} height={100} className="mx-auto" />
        </div>
        <div>
        <ul className="flex gap-10 justify-around items-center">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
            </ul>
        </div>
        
        
        </div>
    </div>
    
  )
}

