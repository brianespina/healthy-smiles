import Image from "next/image";
import { ReactNode } from "react";
import type { contentBoxType } from "../types/section.types";

interface ContentBoxProps {
  children?: ReactNode;
  type?: contentBoxType;
  bg?: 'none' | 'light';
  image?: string;
  className?: string;
}

export default function ContentBox({ children, type = "image-right-50/50", bg = 'none', image = "", className = "" }: ContentBoxProps) {
  return (
    <section className={`${bg == 'none' ? "" : 'bg-(--color-light)'} ${className}`} >
      <div
        className={`container lg:w-9/12 mx-auto px-4 flex flex-col items-center gap-16 ${type === "image-right-50/50" ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
      >
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
