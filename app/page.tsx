import { CalendarClock } from "lucide-react";
import Link from "next/link";
import Heading from "./components/Heading";
import TrustCards from "./components/TrustCards";
import Image from "next/image";

//images
import heroSectionImg from "@/public/hero-section-6.jpg";
import ContentBox from "./sections/ContentBox";


export default function Home() {
  return (
    <main>
      <section className="relative h-full flex items-center pb-64 pt-80 overflow-hidden">

        {/* BACKGROUND IMAGE (Next.js optimized) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent z-10"></div>

        {/* CONTENT */}
        <div className="container p-4 z-20 m-auto">
          <div className="flex flex-col gap-4 lg:w-4/12 w-full">
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

              <Link className="button backdrop-blur-sm bg-white/15 border border-white text-white" href="/">
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
        <div className="container px-4 py-30 m-auto flex flex-col">
          <Heading align="center">Why Patients Trust Our Dental Care</Heading>
          <TrustCards />
        </div>
      </section>

      <ContentBox bg="light" image="/hero-section-2.jpg">
        <Heading>
          Teeth Cleaning & Oral Prophylaxis
        </Heading>
        <p className="text-gray-600 mb-6">
          Keep your teeth and gums healthy with regular deep cleaning. Our oral prophylaxis treatment removes plaque, tartar, and surface stains to prevent gum disease, freshen your breath, and maintain overall oral health. Ideal for patients of all ages and recommended every six months.
        </p>
        <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
      </ContentBox>

      <ContentBox type="image-left-50/50" image="/hero-section-3.jpg">
        <Heading>
          Teeth Cleaning & Oral Prophylaxis
        </Heading>
        <p className="text-gray-600 mb-6">
          Keep your teeth and gums healthy with regular deep cleaning. Our oral prophylaxis treatment removes plaque, tartar, and surface stains to prevent gum disease, freshen your breath, and maintain overall oral health. Ideal for patients of all ages and recommended every six months.
        </p>
        <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
      </ContentBox>

      <ContentBox bg="light" image="/hero-section-4.jpg">
        <Heading>
          Teeth Whitening
        </Heading>
        <p className="text-gray-600 mb-6">
          Brighten your smile safely and effectively with our professional whitening treatment. Using advanced whitening solutions, we remove deep stains and discoloration, giving you a noticeably whiter and more radiant smile — perfect for special occasions or everyday confidence.
        </p>
        <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
      </ContentBox>
      <ContentBox type="image-left-50/50" image="/hero-section-5.jpg">
        <Heading>
          Braces & Orthodontics
        </Heading>
        <p className="text-gray-600 mb-6">
          Correct misalignment and improve your bite with our orthodontic options. We offer metal braces, ceramic braces, and invisible aligners tailored to your needs. Straightening your teeth not only enhances your appearance but also contributes to better long-term dental health.
        </p>
        <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
      </ContentBox>

    </main>
  );
}
