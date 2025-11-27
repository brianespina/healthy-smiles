import Image from "next/image";
import { ReactNode } from "react";
import type { contentBoxType } from "../types/section.types";

interface ContentBoxProps {
  children?: ReactNode;
  type?: contentBoxType;
  bg?: 'none' | 'light';
  image?: string;
}

export default function ContentBox({ children, type = "image-right-50/50", bg = 'none', image = "" }: ContentBoxProps) {
  return (
    <section className={`py-32 ${bg == 'none' ? "" : 'bg-gray-50'}`} >
      <div className={`container lg:w-9/12 mx-auto px-4 flex flex-col lg:flex-row${type == 'image-right-50/50' ? "-reverse" : ""} items-center gap-16`}>

        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">

            <Image
              src={image}
              alt="Fillings & Restorations"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-3">
          {children}
        </div>
      </div>

    </section >
  )
}
