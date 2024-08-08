import React from "react";
import LineSeparator from "../LineSeparator";
import SkillCard from "../SkillCard";

export default function Skills() {
  return (
    <>
      <div className="w-full mt-2">
        <LineSeparator className="border-[0.5px] border-blackstone-200" />
      </div>
      <div className="w-full bg-skills bg-cover bg-center bg-no-repeat">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center space-x-6 space-y-6 lg:flex-row lg:px-0 lg:max-w-[1015px] mx-auto lg:items-center lg:justify-around lg:py-24 py-6 md:py-12 ">
          <div
            className="w-64 mt-6 ml-6 p-4 rounded-md bg-white/10 shadow-sm ring-1 ring-blackstone-500/5 backdrop-blur-sm"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <SkillCard
              imagePath="/skills/typescript.png"
              title="Typescript"
              link="https://www.typescriptlang.org/"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="300"
            className="w-64 p-4 rounded-md bg-white/10 shadow-sm ring-1 ring-blackstone-500/5 backdrop-blur-sm"
          >
            <SkillCard
              imagePath="/skills/next.png"
              title="Next JS"
              link="https://nextjs.org/"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="300"
            className="w-64 p-4 rounded-md bg-white/10 shadow-sm ring-1 ring-blackstone-500/5 backdrop-blur-sm"
          >
            <SkillCard
              imagePath="/skills/tailwind.png"
              title="Tailwind CSS"
              link="https://tailwindcss.com/"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="300"
            className="w-64 p-4 rounded-md bg-white/10 shadow-sm ring-1 ring-blackstone-500/5 backdrop-blur-sm"
          >
            <SkillCard
              imagePath="/skills/swift.png"
              title="Swift UI"
              link="https://developer.apple.com/xcode/swiftui/"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="300"
            className="w-64 p-4 rounded-md bg-white/10 shadow-sm ring-1 ring-blackstone-500/5 backdrop-blur-sm"
          >
            <SkillCard
              imagePath="/skills/flutter.png"
              title="Flutter"
              link="https://flutter.dev/"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <LineSeparator className="border-[0.5px] border-blackstone-200" />
      </div>
    </>
  );
}
