import { CalendarClock } from "lucide-react";
import Link from "next/link";
import Heading from "./(components)/Heading";
import TrustCards from "./(components)/TrustCards";
import Image from "next/image";

//images
import heroSectionImg from "@/public/hero-section-6.jpg";


export default function Home() {
  return (
    <main>
      <section className="relative h-full flex items-center pb-64 pt-80 overflow-hidden">

        {/* BACKGROUND IMAGE (Next.js optimized) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroSectionImg}
            alt="Dental Clinic Hero"
            fill
            placeholder="blur"
            priority
            className="object-cover object-right"
          />
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>

        {/* CONTENT */}
        <div className="container p-4 z-20 m-auto">
          <div className="flex flex-col gap-4 lg:w-7/12 w-full">
            <Heading type="h1">
              Modern Dental Care for Healthy, Confident Smiles
            </Heading>

            <p className="text-white/90 theme-text-shadow">
              Experience gentle, precise, and patient-focused treatments using advanced dental technology.
            </p>

            <div className="flex flex-row gap-2 pt-10">
              <Link className="button bg-(--color-theme) text-white" href="/">
                Book an Appointment
              </Link>

              <Link className="button border border-white text-white" href="/">
                Call Us
              </Link>
            </div>

            <small className="text-(--color-light) flex flex-row items-center gap-2">
              <CalendarClock size={20} /> Open Monday–Saturday. Walk-ins welcome.
            </small>
          </div>
        </div>

        {/* CURVED DIVIDER */}
        <svg className="absolute bottom-0 w-full z-20" viewBox="0 0 1440 80" fill="white">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,80 L0,80 Z"></path>
        </svg>
      </section>
      <section>
        <div className="container px-4 py-40 m-auto flex flex-col">
          <Heading align="center">Why Patients Trust Our Dental Care</Heading>
          <TrustCards />
        </div>
      </section>
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-16">

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">

              <Image
                src="/hero-section-2.jpg"
                alt="Fillings & Restorations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* LEFT TEXT */}
          <div className="lg:w-1/2 w-full flex flex-col gap-3">
            <Heading>
              Teeth Cleaning & Oral Prophylaxis
            </Heading>
            <p className="text-gray-600 mb-6">
              Keep your teeth and gums healthy with regular deep cleaning. Our oral prophylaxis treatment removes plaque, tartar, and surface stains to prevent gum disease, freshen your breath, and maintain overall oral health. Ideal for patients of all ages and recommended every six months.
            </p>
            <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
          </div>
        </div>
      </section>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT IMAGE */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero-section-3.jpg"
                alt="Teeth Cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="lg:w-1/2 w-full flex flex-col gap-3">
            <Heading>
              Fillings & Restorations
            </Heading>
            <p className="text-gray-600 mb-6">
              Restore damaged or decayed teeth with durable, natural-looking fillings. We use high-quality composite materials designed to blend seamlessly with your natural teeth, ensuring both function and aesthetics. This treatment prevents further decay while strengthening your tooth structure.
            </p>
            <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
