import Image from "next/image";

export function TheCatFramework() {
  return (
    <>
      <div className="bg-[#f0f7ff] px-6 md:px-7 py-10 mt-20">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-6 max-w-xl items-center text-center">
            <h1 className="font-bold text-3xl md:text-4xl leading-tight">
              The
              <span className="text-[#1a73e8]"> CAT Framework</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-700">
              Our Proven Approach to{" "}
              <span className="text-blue-600">Learning Excellence</span>
            </p>
          </div>

          <Image
            src="/catV2.svg"
            alt="cat framework"
            width={1000}
            height={400}
            className="object-contain w-full max-w-250 h-auto"
          />
        </div>
      </div>
    </>
  );
}