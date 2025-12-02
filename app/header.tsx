import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Navigation from "./components/Navigation"

//header
import logo from "@/public/healthy-smiles-v2.png";

export default function Header() {
  return (
    <header className="w-full absolute z-20 bg-linear-to-b from-black/50 to-transparent">
      <div className="w-full bg-gray-950 border-b-3 border-(--color-accent) text-white text-sm py-2 flex justify-center items-center gap-2">
        <PhoneCall size={16} className="opacity-90" stroke="#00af9f" />
        <span className="tracking-wide opacity-75">Have questions? Our team is here to help. Reach us at (123) 456-7890.</span>
      </div>
      <div className="container m-auto flex flex-row justify-between items-center h-full p-4 pt-6">
        <Image
          src={logo}
          width={150}
          height={100}
          alt="Dentist Logo"
        />
        <Navigation />
      </div>
    </header >
  )
}
