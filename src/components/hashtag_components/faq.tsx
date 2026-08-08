"use client";

import { ArrowDownIcon } from "lucide-react";
import { useState } from "react";
import { EnquiryForm } from "../enquiryform";

export function FAQ() {
  const stats = [
    {
      id: 1,
      label: "About the Course",
      questions: [
        {
          q: "What types of corporate training programs does Accredian offer?",
          a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
        },
        {
          q: "What domain specializations are available?",
          a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI",
        },
      ],
    },
    {
      id: 2,
      label: "About the Delivery",
      questions: [
        {
          q: "Can courses be customized for specific industries or teams?",
          a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization's goals.",
        },
        {
          q: "Who are the instructors for these programs?",
          a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
        },
        {
          q: "What formats are the programs delivered in?",
          a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
        },
      ],
    },
    {
      id: 3,
      label: "Miscellaneous",
      questions: [
        {
          q: "What is the ideal team size for corporate training?",
          a: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
        },
        {
          q: "How do we get started with Accredian?",
          a: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
        },
      ],
    },
  ];

  const [open, setOpen] = useState<number>(1);
  const [questionOpen, setQuestionOpen] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setOpen(id);
  };

  const handleQuestionClick = (question: string) => {
    setQuestionOpen(question);
  };

  const activeCategory = stats.find((stat) => stat.id === open);

  return (
    <div className="py-16 px-6">
      <h2 className="font-bold text-3xl md:text-4xl text-center md:text-left">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10 mt-12 max-w-5xl mx-auto">
        <div className="flex flex-col gap-3 w-full md:w-64 shrink-0">
          {stats.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={
                open === id
                  ? "hover:cursor-pointer border-0.7 border-[#737373] text-[#1f76e9] rounded-md p-4 font-bold shadow-lg"
                  : "hover:cursor-pointer border border-[#737373] text-[#737373] rounded-md p-4 font-bold"
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex-1">
          {activeCategory?.questions.map((question) => (
            <div key={question.q} className="mb-5">
              <button
                onClick={() => handleQuestionClick(question.q)}
                className={
                  questionOpen === question.q
                    ? "hover:cursor-pointer text-[#1a73e8] font-bold flex items-center gap-2 text-left"
                    : "hover:cursor-pointer font-bold flex items-center gap-2 text-left"
                }
              >
                <ArrowDownIcon
                  className={
                    questionOpen === question.q
                      ? "rotate-180 transition ease-in-out shrink-0"
                      : "shrink-0"
                  }
                  size={18}
                />
                {question.q}
              </button>

              {questionOpen === question.q && (
                <div className="mt-3 ml-6 text-gray-700">{question.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 w-fit"
        >
          Enquire Now
        </button>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl relative overflow-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-xl z-10"
            >
              ✕
            </button>

            <EnquiryForm />
          </div>
        </div>
      )}
    </div>
  );
}
