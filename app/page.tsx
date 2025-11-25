import { CalendarClock } from "lucide-react";
import Link from "next/link";
import Heading from "./(components)/Heading";
import TrustCards from "./(components)/TrustCards";

export default function Home() {
  return (
    <main>
      <section className="h-full bg-cover relative flex items-center pb-52 pt-64 object-cover object-right" style={{
        backgroundImage:
          "url(/hero-section-6.jpg)",
      }}>
        <div className="container p-4 z-20 m-auto">
          <div className="flex flex-col gap-4 lg:w-7/12 w-full">
            <Heading type="h1">Modern Dental Care for Healthy, Confident Smiles</Heading>
            <p className="text-white/90 theme-text-shadow">Experience gentle, precise, and patient-focused treatments using advanced dental technology.</p>
            <div className="flex flex-row gap-2 pt-10">
              <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
              <Link className="button border border-white text-white" href="/">Call Us</Link>
            </div>
            <small className="text-(--color-light) flex flex-row items-center gap-2"><CalendarClock size={20} /> Open Monday–Saturday. Walk-ins welcome.</small>
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/40 transparent z-10"></div>
        <svg className="absolute bottom-0 w-full z-20" viewBox="0 0 1440 80" fill="white">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,80 L0,80 Z"></path>
        </svg>
      </section>
      <section>
        <div className="container px-4 py-20 pt-40 m-auto flex flex-col">
          <Heading align="center">Why Patients Trust Our Dental Care</Heading>
          <TrustCards />
        </div>
      </section>

    </main>
  );
}
