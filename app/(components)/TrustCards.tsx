import { Smile, UserCheck, HeartHandshake, BadgeDollarSign } from "lucide-react";

export default function TrustCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

      {/* Modern Equipment */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition bg-linear-to-b from-white to-gray-50
">
        <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
          <Smile size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
        <p className="text-gray-600">
          We use advanced digital imaging and dental technology for accurate and comfortable treatments.
        </p>
      </div>

      {/* Experienced Dentist */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition bg-linear-to-b from-white to-gray-50">
        <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
          <UserCheck size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Experienced Dentist</h3>
        <p className="text-gray-600">
          Years of clinical experience in restorative, cosmetic, and family dentistry.
        </p>
      </div>

      {/* Comfort-Focused Care */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition bg-linear-to-b from-white to-gray-50">
        <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
          <HeartHandshake size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Comfort-Focused Care</h3>
        <p className="text-gray-600">
          Gentle, patient-first approach designed to reduce anxiety and make each visit stress-free.
        </p>
      </div>

      {/* Transparent Pricing */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition bg-linear-to-b from-white to-gray-50">
        <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
          <BadgeDollarSign size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
        <p className="text-gray-600">
          Clear, honest pricing with no hidden fees.
        </p>
      </div>

    </div>
  );
}

