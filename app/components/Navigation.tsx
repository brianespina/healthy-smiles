"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="flex flex-row gap-7 items-center">
      <ul className="flex flex-row gap-7 theme-text-shadow">

        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? "text-white border-b-2 border-(--color-secondary) pb-2 font-bold"
                    : "text-white opacity-80 hover:opacity-100"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}

      </ul>

      <Link
        className="bg-(--color-theme) text-(--color-light) button hover:bg-gray-800 transition-colors"
        href="/contact"
      >
        Contact Us
      </Link>
    </nav>
  );
}


