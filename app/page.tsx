import { CalendarClock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-full bg-cover relative flex items-center pb-52 pt-72 bg-center" style={{
        backgroundImage:
          "url(/hero-section.jpg)",
      }}>
        <div className="container p-4 z-20 m-auto">
          <div className="flex flex-col gap-4 w-7/12">
            <h1>Modern Dental Care for Healthy, Confident Smiles</h1>
            <p className="text-white">Experience gentle, precise, and patient-focused treatments using advanced dental technology.</p>
            <div className="flex flex-row gap-2 pt-10">
              <Link className="button bg-(--color-theme) text-white" href="/">Book an Appointment</Link>
              <Link className="button border border-white text-white" href="/">Call Us</Link>
            </div>
            <small className="text-(--color-light) flex flex-row items-center gap-2"><CalendarClock size={20} /> Open Monday–Saturday. Walk-ins welcome.</small>
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/95 to-black/40 z-10"></div>
      </section>
      <section>
        <div className="container px-4 py-20 m-auto">
          <h2>Why Patients Trust Our Dental Care</h2>
        </div>
      </section>
    </main>
  );
}
