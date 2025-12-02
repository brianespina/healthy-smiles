import { ReactNode } from "react";

export default function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`p-6 rounded-xl shadow hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  )
}
