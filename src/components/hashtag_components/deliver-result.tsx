import { BarChart4, MonitorPlay, Presentation } from "lucide-react";

export function DeliverResults() {
  const stats = [
    {
      id: 1,
      title: "Skill Gap Analysis",
      Icon: BarChart4,
      text: "Assess team skill gaps and developmental needs.",
    },
    {
      id: 2,
      title: "Customized Training Plan",
      Icon: Presentation,
      text: "Create a tailored roadmap addressing organizational goals.",
    },
    {
      id: 3,
      title: "Flexible Program Delivery",
      Icon: MonitorPlay,
      text: "Deliver adaptable programs aligned with industry and organizational needs.",
    },
  ];

  return (
    <>
      <div className="py-16 px-6">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            How We Deliver Results That
            <br />
            <span className="text-blue-600">Matter?</span>
          </h2>

          <p className="text-base md:text-lg mt-3 text-center">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-5xl mx-auto">
          {stats.map(({ title, Icon, text, id }) => (
            <div
              key={id}
              className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="absolute -left-2.5 top-6 bottom-6 w-2 bg-blue-700 rounded-full" />

              <div className="absolute -right-2.5 top-6 bottom-6 w-2 bg-blue-700 rounded-full" />

              <div className="relative border border-blue-100 rounded-xl bg-[#eff6ff] px-6 pt-5 pb-8">
                <div className="absolute top-3 left-3 h-6 w-6 rounded-full bg-[#eff6ff] border border-blue-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                  {id}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center mt-2">
                    <Icon className="text-white" size={26} strokeWidth={1.75} />
                  </div>

                  <span className="font-bold text-lg mt-4">{title}</span>

                  <span className="text-sm text-gray-500 mt-2">{text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
