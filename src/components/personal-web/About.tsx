import React from "react";
import LineSeparator from "../LineSeparator";
import Typography from "../Typography";
import NextImage from "../NextImage";

export default function About() {
  return (
    <>
      <div className="w-full mt-12 ">
        <LineSeparator className="border-[0.5px] border-blackstone-200" />
      </div>
      <div className="flex flex-col px-6 lg:px-0 lg:flex-row lg:max-w-[1015px] items-stretch justify-center">
        <div className="lg:w-2/3 relative">
          <div>
            <Typography
              as="h1"
              variant="h1"
              font="playfairdisplay"
              className="text-[82px] lg:text-[110px] leading-none mt-4"
            >
              About
            </Typography>
            <div className="flex items-center space-x-6 -mt-4 lg:-mt-4">
              <div className="flex items-end space-x-4">
                <NextImage
                  src="/about/asterisk.png"
                  width={752}
                  height={748}
                  alt="asterisk"
                  className="w-14 lg:w-16"
                />
                <Typography
                  as="h1"
                  variant="h1"
                  font="playfairdisplay"
                  className="text-[82px] lg:text-[110px] leading-none"
                >
                  me
                </Typography>
              </div>
              <div className="border rounded-full px-4 py-1 border-black mt-4">
                <Typography
                  variant="c"
                  font="playfairdisplay"
                  className="text-[12px]"
                >
                  Frontend Dev
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
          </div>
          <Typography
            font="montserrat"
            className=" z-40 lg:pr-16 relative my-4"
            variant="bt"
          >
            Hey there, I&apos;m Nadia Lovely! 👋🏻 <br /> <br /> I&apos;m a
            frontend developer who&apos;s all about turning complex ideas into
            smooth, user-friendly digital experiences. My curiosity about how
            businesses work and my passion for innovation led me to study
            Information Systems. <br /> <br /> But coding isn&apos;t my only
            focus. I thrive on bringing creative ideas to life, whether through
            business plan competitions or leading projects. I&apos;ve worked in
            startups, software houses, university committees, and as a
            freelancer. <br /> <br /> I&apos;m always up for the next challenge!
          </Typography>

          <NextImage
            src="/about/blur-element-pink.png"
            width={1034}
            height={428}
            alt="blur pink element"
            className="hidden lg:block absolute w-[500px] right-24 bottom-0 z-10 opacity-90 "
          />
        </div>
        <div className="relative lg:w-1/3 flex flex-grow items-stretch">
          <div className="absolute lg:top-0 lg:left-0 lg:h-3/4 lg:w-px lg:bg-blackstone-500 z-20"></div>
          <NextImage
            src="/about/nadia.png"
            width={1208}
            height={1884}
            alt="nadia"
            className="w-[110%] h-full object-cover"
            style={{ width: "100%", minHeight: "100%" }}
          />
          <NextImage
            src="/about/nadia-mobile.png"
            width={1208}
            height={1884}
            alt="nadia"
            className="w-full block lg:hidden"
          />
          <NextImage
            src="/about/half-eclipse.png"
            width={498}
            height={222}
            alt="half-eclipse"
            className="absolute bottom-0 w-80 -left-[35%] hidden lg:block z-0"
          />
          <NextImage
            src="/about/blur-element-purple.png"
            width={368}
            height={725}
            alt="purple blurred element"
            className="absolute top-2 w-44 -left-[52%] hidden lg:block -z-0"
          />
        </div>
      </div>
      <div className="w-full">
        <LineSeparator className="border-[0.5px] border-blackstone-200" />
      </div>
    </>
  );
}
