"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ type, gap = 7 }: { type?: string; gap?: number }) {

  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact", type: "button" },
  ];

  const buttonClasses = `bg-(--color-theme) text-(--color-light) button hover:bg-gray-800 transition-colors`;
  return (
    <nav className="flex flex-row gap-7">
      <ul className={`flex ${type == 'col' ? 'flex-col' : 'flex-row items-center'} gap-${gap} theme-text-shadow`}>

        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? `text-white border-b-2 border-(--color-secondary) pb-2 font-bold`
                    : `text-white opacity-80 hover:opacity-100 ${link.type == 'button' && type != 'col' ? buttonClasses : ''}`
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>
  );
}


