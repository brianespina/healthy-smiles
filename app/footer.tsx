import Image from 'next/image'
import logo from '@/public/healthy-smiles-v2.png'
import Heading from './components/Heading'
import Navigation from './components/Navigation'

export default function Footer() {
  return (
    <footer className="p-20 w-full bg-gray-950 border-t-3 border-(--color-accent) text-white text-sm flex gap-10 justify-between items-start">
      <Image
        src={logo}
        width={150}
        height={100}
        alt="Dentist Logo"
      />
      <div className='space-y-1'>
        <Heading type='h3' className="pb-3">Quick links</Heading>
        <Navigation type='col' gap={3} />
      </div>
      <div className='space-y-1'>
        <Heading type='h3' className="pb-3">Clinic Hours:</Heading>
        <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
      <small>&copy; 2025 Healthy Smiles Dental Care. All rights reserved.</small>
    </footer >
  )
}
