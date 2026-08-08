"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const stats = [
    {
      id: 1,
      company_logo: "/imgs/clients/5.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      id: 2,
      company_logo: "/imgs/clients/6.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      id: 3,
      company_logo: "/imgs/clients/1.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="mt-3 text-base md:text-xl">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="mt-14 w-full md:w-[90%] max-w-375 mx-auto px-8 md:px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({
              length: Math.ceil(stats.length / 2),
            }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stats
                    .slice(index * 2, index * 2 + 2)
                    .map(({ id, company_logo, text }) => (
                      <Card
                        key={id}
                        className="rounded-2xl border border-gray-300 shadow-none h-auto md:h-65"
                      >
                        <CardContent className="h-full p-6 md:p-8 flex flex-col">
                          <Image
                            src={company_logo}
                            alt="Company Logo"
                            width={80}
                            height={80}
                            className="mb-6 md:mb-8 w-16 md:w-20 h-auto"
                          />

                          <p className="text-base md:text-lg leading-8 md:leading-9 text-gray-700">
                            &quot;{text}&quot;
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
