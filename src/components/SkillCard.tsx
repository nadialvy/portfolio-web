import React from "react";
import Typography from "./Typography";
import NextImage from "./NextImage";
import Link from "next/link";

type SkillCardProps = {
  title: string;
  link: string;
  imagePath: string;
  classname?: string;
};

export default function SkillCard({ title, link, imagePath, classname }: SkillCardProps) {
  return (
      <Link className="group" href={link} target="_blank">
        <div className="flex justify-between items-center">
          <Typography as="p" variant="c" font="montserrat">
            {title}
          </Typography>
          <div className="bg-white w-10 h-10 group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all rounded-full flex justify-center items-center">
            <NextImage
              src="/icon/arrow.svg"
              width={24}
              height={22}
              alt="arrow"
              className="w-3"
            />
          </div>
        </div>
        <div className="w-full aspect-square mt-4 flex justify-center items-center bg-white rounded-lg">
          <NextImage
            src={imagePath}
            width={120}
            height={120}
            alt="typescript"
            className="w-20 lg:w-16"
          />
        </div>
      </Link>
  );
}
