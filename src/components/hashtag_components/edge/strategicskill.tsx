import {
  GraduationCap,
  Luggage,
  MonitorCheck,
  MonitorX,
} from "lucide-react";
import Image from "next/image";

export function StrategicSkillEnhancement() {
  const joins = [
    {
      Icon: MonitorCheck,
      title: "Tech Professionals",
      text: "Enhance expertise, embrace tech, drive innovation.",
    },
    {
      Icon: MonitorX,
      title: "Non-Tech Professionals",
      text: "Adapt digitally, collaborate in tech environments.",
    },
    {
      Icon: GraduationCap,
      title: "Emerging Professionals",
      text: "Develop powerful skills for rapid career growth.",
    },
    {
      Icon: Luggage,
      title: "Senior Professionals",
      text: "Strengthen leadership, enhance strategic decisions.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="bg-blue-500 rounded-2xl shadow-2xl pt-10">
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-10 px-6 md:px-10">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-white font-semibold text-lg md:text-xl">
              Who should join?
            </span>

            <span className="text-white text-3xl md:text-4xl font-bold text-center lg:text-left">
              Strategic Skill
              <br />
              Enhancement
            </span>

            <Image
              src="/whojoin.png"
              alt="img"
              width={300}
              height={100}
              className="w-60 md:w-72 lg:w-75 h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-8 pl-0 lg:pl-10 w-full lg:max-w-150">
            {joins.map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon
                  className="text-white"
                  size={60}
                  strokeWidth={2}
                />

                <span className="font-bold text-white block mt-3">
                  {title}
                </span>

                <p className="mt-3 text-white/90 leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}