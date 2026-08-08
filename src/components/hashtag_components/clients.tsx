import Image from "next/image";

export function Clients() {
  const stats = [
    {
      url: "/imgs/clients/1.png",
    },
    {
      url: "/imgs/clients/2.png",
    },
    {
      url: "/imgs/clients/3.png",
    },
    {
      url: "/imgs/clients/4.png",
    },
    {
      url: "/imgs/clients/5.svg",
    },
    {
      url: "/imgs/clients/6.svg",
    },
  ];

  return (
    <>
      <div className="py-16 px-6">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold text-3xl md:text-4xl text-center leading-tight">
            Our <span className="text-blue-600">Proven Partnerships</span>
          </h1>

          <p className="text-base md:text-lg text-center">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">Industry&apos;s Best</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl">
            {stats.map((stat) => (
              <Image
                key={stat.url}
                src={stat.url}
                alt="img"
                width={100}
                height={100}
                className="w-20 md:w-24 lg:w-25 h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}