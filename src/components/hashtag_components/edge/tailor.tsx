import Image from "next/image";

export function TailoredCourseSegmentation() {
  const stats = [
    {
      title: "Product & Innovation Hub",
      url: "/imgs/tailored_course/1.webp",
      text: "Certificate, Executive, Post Graduate Certificate",
    },
    {
      title: "Gen-AI Mastery",
      url: "/imgs/tailored_course/2.webp",
      text: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    },
    {
      title: "Leadership Elevation",
      url: "/imgs/tailored_course/3.webp",
      text: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    },
    {
      title: "Tech & Data Insights",
      url: "/imgs/tailored_course/4.webp",
      text: "Senior Leadership, Mid-Career Professionals, Freshers",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Tailored Course <span className="text-blue-600">Segmentation</span>
        </h2>

        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">
          Explore Custom-fit Courses
          <br />
          Designed to Address Every Professional Focus
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-6xl mx-auto px-4 md:px-0">
        {stats.map(({ title, url, text }) => (
          <div
            key={title}
            className="flex flex-col border border-gray-200 rounded-xl shadow-sm overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <div className="relative w-full h-40 md:h-48">
              <Image src={url} alt={title} fill className="object-cover" />
            </div>

            <div className="flex flex-col items-center text-center gap-2 px-4 py-6">
              <span className="font-bold text-lg md:text-xl text-blue-600">
                {title}
              </span>

              <span className="text-sm md:text-base text-gray-600">
                {text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}