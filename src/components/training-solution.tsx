"use client";

import { ArrowRightIcon, HeadsetIcon } from "lucide-react";
import { EnquiryForm } from "./enquiryform";
import { useState } from "react";

export function TrainingSolutions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-5xl mx-auto bg-blue-600 rounded-2xl shadow-2xl px-8 py-10 flex items-center justify-between gap-6 overflow-hidden relative">
        <div className="flex items-center gap-5 relative z-10">
          <div className="bg-[#609ceb]/60 p-1.5 rounded-2xl shrink-0">
            <div className="bg-white p-3 rounded-xl flex items-center justify-center">
              <HeadsetIcon size={32} color="#2b7fff" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Want to Learn More About Our Training Solutions?
            </span>
            <span className="text-white/90 font-medium text-sm">
              Get Expert Guidance for Your Team&apos;s Success!
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="hover:cursor-pointer flex items-center gap-2 text-blue-600 bg-white font-semibold rounded-lg px-6 py-3 w-fit shrink-0 relative z-10 hover:bg-gray-50 transition-colors"
        >
          Contact Us
          <ArrowRightIcon size={18} />
        </button>
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
      </div>
    </>
  );
}
