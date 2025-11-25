import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full absolute z-20 bg-linear-to-b from-black/50 to-transparent">
      <div className="w-full bg-gray-950 border-b-3 border-(--color-secondary) text-white text-sm py-2 flex justify-center items-center gap-2">
        <PhoneCall size={16} className="opacity-90" />
        <span className="tracking-wide opacity-75">Have questions? Our team is here to help. Reach us at (123) 456-7890.</span>
      </div>
      <div className="container m-auto flex flex-row justify-between items-center h-full p-4 pt-6">
        <Image
          src="/healthy-smiles-v2.png"
          width={150}
          height={100}
          alt="Dentist Logo"
        />
        <nav className="flex flex-row gap-7 items-center">
          <ul className="flex flex-row gap-7 theme-text-shadow">
            <li>
              <Link href="/" className="text-white border-b-2 border-(--color-theme) pb-2 font-bold">Home</Link >
            </li>
            <li>
              <Link href="/about" className="text-white">About</Link >
            </li>
            <li>
              <Link href="/" className="text-white">Gallery</Link >
            </li>
            <li>
              <Link href="/" className="text-white">FAQ</Link >
            </li>
          </ul>
          <Link className="bg-(--color-theme) text-(--color-light) button hover:bg-gray-800 transition-colors" href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header >
  )
}
