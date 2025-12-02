import { UserCheck, HeartHandshake, BadgeDollarSign, Sparkles, UserStar } from "lucide-react";
import Card from "../sections/Card";
import Heading from "./Heading";
import Link from "next/link";

const content = [
  {
    heading: "Modern Equipment",
    body: "We use advanced digital imaging and dental technology for accurate and comfortable treatments.",
    icon: Sparkles
  },
  {
    heading: "Experienced Dentist",
    body: "Years of clinical experience in restorative, cosmetic, and family dentistry.",
    icon: UserStar
  },
  {
    heading: "Comfort-Focused Care",
    body: "Gentle, patient-first approach designed to reduce anxiety and make each visit stress-free.",
    icon: HeartHandshake
  },
  {
    heading: "Transparent Pricing",
    body: "Clear, honest pricing with no hidden fees.",
    icon: BadgeDollarSign
  }
];

export default function TrustCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">

      {content.map((card, key) => {
        return (
          <Card key={key} className="bg-(--color-light) flex flex-col gap-2">
            <div className="flex flex-row justify-between ">
              <div className="w-16 h-16 bg-white text-(--color-theme) rounded-md flex items-center justify-center mb-4">
                <card.icon size={32} strokeWidth={1.5} className="stroke-(--color-accent)" />
              </div>

            </div>
            <Heading type="h3" className="text-(--color-theme)">{card.heading}</Heading>
            <p className="text-gray-600">
              {card.body}
            </p>
          </Card>
        );
      })}

    </div>
  );
}

