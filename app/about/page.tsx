import Heading from "../components/Heading";
import Image from "next/image";
import heroSectionImg from "@/public/hero-section-2.jpg";
import imageOne from "@/public/hero-section-3.jpg";
import imageTwo from "@/public/hero-section-4.jpg";
import ContentBox from "../sections/ContentBox";
import Link from "next/link";
import { Calendars, GraduationCap, LayoutPanelLeft, Sparkles } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="relative h-full flex items-center pb-30 pt-60 lg:pb-40 lg:pt-60 overflow-hidden">

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
              About Us
            </Heading>

            <p className="text-white/90 theme-text-shadow">
              Experience gentle, precise, and patient-focused treatments using advanced dental technology.
            </p>
            <Link className="button bg-(--color-theme) text-white" href="/">Contact Us</Link>
          </div>
        </div>

        {/* CURVED DIVIDER */}
        <svg className="absolute bottom-0 w-full z-20 hidden lg:block" viewBox="0 0 1440 80" fill="white">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,80 L0,80 Z"></path>
        </svg>
      </section>
      <ContentBox image={imageOne.src} className="py-20">
        <Heading>Meet Dr. Smith, Your Trusted Dental Care Partner</Heading>
        <p>Dr. Smith is a licensed dentist specializing in preventive, restorative, and cosmetic dentistry. With a passion for patient comfort and education, Dr. Smith has helped hundreds of patients achieve healthier, brighter smiles.</p>
        <Heading type="h3">Experience &amp; Background</Heading>
        <ul className="text-(--color-font) flex flex-col gap-3 pb-5">
          <li className="flex flex-row gap-2"><GraduationCap size={20} className="stroke-(--color-accent)" />Graduated from [University Name]</li>
          <li className="flex flex-row gap-2"><Calendars size={20} className="stroke-(--color-accent)" />Over [X] years of clinical experience</li>
          <li className="flex flex-row gap-2"><Sparkles size={20} className="stroke-(--color-accent)" />Trained in cosmetic and restorative dentistry</li>
          <li className="flex flex-row gap-2"><LayoutPanelLeft size={20} className="stroke-(--color-accent)" />Continuously attending seminars and training to stay updated with modern techniques</li>
        </ul>
      </ContentBox>

      <section className="bg-gray-50 bg-[url('/hero-section-2.jpg')] bg-fixed bg-center relative">
        <div className="container px-4 py-20 z-10 m-auto relative text-white space-y-3">
          <Heading className="text-white" align="center">
            Philosophy
          </Heading>
          <p className="text-center"><strong>My mission is simple:</strong><br /> provide high-quality, comfortable dental care that helps patients feel confident and cared for.</p>
        </div>
        <div className="bg-black/60 absolute inset-0"></div>
      </section>
      <ContentBox type="image-left-50/50" image={imageTwo.src} className="py-20">
        <Heading>Clinic Overview</Heading>
        <p>A clean, modern, fully equipped dental clinic designed to ensure safety, comfort, and excellent treatment outcomes.</p>
        <Link className="button bg-(--color-theme) text-white" href="/">Contact Us</Link>
      </ContentBox>
    </main>
  );
}
