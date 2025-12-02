import Image from 'next/image'
import logo from '@/public/healthy-smiles-v2.png'

export default function Footer() {
  return (
    <footer className="p-20 w-full bg-gray-950 border-t-3 border-(--color-accent) text-white text-sm flex items-center gap-10 justify-between">
      <Image
        src={logo}
        width={150}
        height={100}
        alt="Dentist Logo"
      />
      <small>&copy; 2025 Healthy Smiles Dental Care. All rights reserved.</small>
    </footer>
  )
}
