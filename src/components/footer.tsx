"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { EnquiryForm } from "./enquiryform";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { Icon: FaFacebook, href: "https://www.facebook.com/accredianlearn" },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/accredianedu/",
    },
    { Icon: FaTwitter, href: "https://x.com/accredianedu" },
    { Icon: FaInstagram, href: "https://www.instagram.com/accredian_edu" },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    },
  ];

  const accredianLinks = [
    { label: "About" },
    { label: "Blog" },
    { label: "Why Accredian" },
  ];

  return (
    <footer className="mt-24 px-6 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-8">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-blue-600 font-bold text-3xl">
                accredian
              </span>
              <span className="text-gray-500 text-xs tracking-wide mt-1">
                credentials that matter
              </span>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
            >
              Enquire Now
            </button>
            <span className="text-sm text-gray-600">
              Speak with our Advisor
            </span>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Accredian</h3>
            <ul className="flex flex-col gap-2">
              {accredianLinks.map(({ label }) => (
                <li key={label}>
                  <Link
                    href={""}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-600"></p>
            <p className="text-gray-600 mt-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>
        <hr className="border-gray-200" />
        <p className="text-center text-sm text-gray-500 pt-6">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <EnquiryForm />
          </div>
        </div>
      )}
    </footer>
  );
}
