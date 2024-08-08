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
          <SkillCard
          classname="mt-6 ml-6"
            imagePath="/skills/typescript.png"
            title="Typescript"
            link="https://www.typescriptlang.org/"
          />
          <SkillCard
            imagePath="/skills/next.png"
            title="Next JS"
            link="https://nextjs.org/"
          />
          <SkillCard
            imagePath="/skills/tailwind.png"
            title="Tailwind CSS"
            link="https://tailwindcss.com/"
          />
          <SkillCard
            imagePath="/skills/swift.png"
            title="Swift UI"
            link="https://developer.apple.com/xcode/swiftui/"
          />
          <SkillCard
            imagePath="/skills/flutter.png"
            title="Flutter"
            link="https://flutter.dev/"
          />
        </div>
      </div>
      <div className="w-full">
        <LineSeparator className="border-[0.5px] border-blackstone-200" />
      </div>
    </>
  );
}
