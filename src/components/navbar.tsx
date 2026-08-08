"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "works", label: "How It Works" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  return (
    <nav className="h-20 shadow-md flex items-center justify-around px-10 sticky top-0 bg-white z-50 mb-10 font-semibold">
      <Image src="/imgs/logo.webp" alt="logo" width={130} height={130} />
      <div className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            onClick={() => setActive(`#${link.id}`)}
            href={`#${link.id}`}
            className={
              active === `#${link.id}`
                ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                : ""
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
