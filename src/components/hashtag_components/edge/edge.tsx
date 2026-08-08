import Image from "next/image";

export function AccredianEdge() {
  const stats = [
    {
      url: "/imgs/accredian.svg",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">
          Key Aspects of{" "}
          <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="mt-14 max-w-7xl mx-auto px-4 md:px-0">
        {stats.map((stat) => (
          <Image
            key={stat.url}
            src={stat.url}
            alt="img"
            width={1300}
            height={100}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
}