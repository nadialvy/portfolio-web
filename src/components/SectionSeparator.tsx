import clsxm from "@/lib/clsxm";
import React from "react";
import Typography from "./Typography";

type SectionSeparatorProps = {
  numberFirst: boolean;
  number: String;
  firstTitle: String;
  secondTitle?: String;
};

export default function SectionSeparator({numberFirst, number, firstTitle, secondTitle}: SectionSeparatorProps) {
  return (
    <div
      className={clsxm(
        "px-6 flex flex-col justify-start items-stretch w-full max-w-[1015px] h-[144px]",
        "lg:items-end lg:px-0  lg:justify-between",
        numberFirst ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <Typography
        font="playfairdisplay"
        className="text-[180px] lg:text-[200px] lg:mt-12 font-extrabold self-stretch"
      >
        {number}
      </Typography>
      <Typography
        as="h2"
        font="montserrat"
        className="font-bold text-[28px] lg:text-[32px] mt-4 leading-none "
      >
        {firstTitle} <br /> {secondTitle}
      </Typography>
    </div>
  );
}
