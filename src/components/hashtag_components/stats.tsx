export function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <div className="text-center py-16 px-6">
      <h2 className="font-bold text-3xl md:text-4xl">
        Our <span className="text-blue-600">Track Record</span>
      </h2>

      <p className="text-base md:text-lg mt-3">
        The Numbers Behind <span className="text-blue-600">Our Success</span>
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch mt-12">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className="flex flex-col md:flex-row items-stretch"
          >
            <div className="flex flex-col items-center gap-4 px-8 md:px-16 py-6 md:py-0">
              <span className="bg-blue-100 text-blue-600 font-bold text-xl rounded-full px-6 py-2">
                {stat.value}
              </span>

              <p className="max-w-55 text-gray-700">{stat.label}</p>
            </div>

            {i < stats.length - 1 && (
              <div className="hidden md:block w-px bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
