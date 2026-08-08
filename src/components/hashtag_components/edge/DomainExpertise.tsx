import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Wallet,
} from "lucide-react";

export function DomainExpertise() {
  const stats = [
    { title: "Product & Innovation Hub", Icon: Lightbulb },
    { title: "Gen-AI Mastery", Icon: Brain },
    { title: "Leadership Elevation", Icon: Users },
    { title: "Tech & Data Insights", Icon: BarChart3 },
    { title: "Operations Excellence", Icon: Settings },
    { title: "Digital Enterprise", Icon: Globe },
    { title: "Fintech Innovation Lab", Icon: Wallet },
  ];

  return (
    <div className="text-center py-16 px-6">
      <h2 className="font-bold text-4xl">
        Our <span className="text-blue-600">Domain Expertise</span>
      </h2>
      <p className="text-lg mt-3">
        <span className="text-blue-600">Specialized Programs </span>
        Designed to Fuel Innovation
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-5xl mx-auto">
        {stats.map(({ title, Icon }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-xl shadow-sm py-8 px-4 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
          >
            <Icon className="text-blue-600" size={60} strokeWidth={2} />
            <span className="font-bold">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}