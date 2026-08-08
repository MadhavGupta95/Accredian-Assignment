"use client";

import { useState } from "react";
import Image from "next/image";
import { EnquiryForm } from "../enquiryform";
import { CheckCircle2Icon } from "lucide-react";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#eff6ff] rounded-3xl shadow-2xl px-6 md:px-10 py-10 md:py-14">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-6 max-w-xl items-center lg:items-start text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Next-Gen
              <br />
              <span className="text-blue-600">Expertise</span> For
              <br /> Your <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-700">
              Cultivate high-performance
              <br />
              teams through expert learning.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
              <span className="flex items-center gap-2">
                <CheckCircle2Icon color="lightgreen" />
                Tailored Solutions
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2Icon color="lightgreen" />
                Industry Insights
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2Icon color="lightgreen" />
                Expert Guidance
              </span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 w-fit"
            >
              Enquire Now
            </button>
          </div>

          <Image
            src="/imgs/p2.webp"
            alt="Two professionals, one holding a laptop"
            width={600}
            height={400}
            className="object-contain w-full max-w-sm md:max-w-md lg:max-w-150 h-auto"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl relative overflow-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-xl z-10"
            >
              ✕
            </button>

            <EnquiryForm />
          </div>
        </div>
      )}
    </>
  );
}
