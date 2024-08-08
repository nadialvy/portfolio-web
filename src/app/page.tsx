import HorizontalScrollCard from "@/components/HorizontalScrollCard";
import LineSeparator from "@/components/LineSeparator";
import NextImage from "@/components/NextImage";
import SectionSeparator from "@/components/SectionSeparator";
import Slider from "@/components/Slider";
import Typography from "@/components/Typography";
import clsxm from "@/lib/clsxm";

export default function Home() {
  return (
    <main className="bg-whiteivory-500 min-h-screen w-full flex flex-col items-center justify-center">
      <>
        <div className="w-full mt-12">
          <LineSeparator className="border-[0.5px] border-blackstone-200" />
        </div>
        <div className="flex flex-col px-6 lg:px-0 lg:flex-row lg:max-w-[1015px] items-center justify-center">
          <div className="lg:w-2/3 relative">
            <div>
              <Typography
                as="h1"
                variant="h1"
                font="playfairdisplay"
                className="text-[82px] leading-none mt-3"
              >
                About
              </Typography>
              <div className="flex items-center space-x-6 -mt-4 lg:-mt-8">
                <div className="flex items-end space-x-4">
                  <NextImage
                    src="/about/asterisk.png"
                    width={752}
                    height={748}
                    alt="asterisk"
                    className="w-14"
                  />
                  <Typography
                    as="h1"
                    variant="h1"
                    font="playfairdisplay"
                    className="text-[82px] leading-none"
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
              Hey there, I'm Nadia Lovely! 👋🏻 <br /> <br /> I’m a frontend
              developer who’s all about turning complex ideas into smooth,
              user-friendly digital experiences. My curiosity about how
              businesses work and my passion for innovation led me to study
              Information Systems. <br /> <br /> But coding isn’t my only focus.
              I thrive on bringing creative ideas to life, whether through
              business plan competitions or leading projects. I’ve worked in
              startups, software houses, university committees, and as a
              freelancer. <br /> <br /> For me, it’s about creating something
              that works—whether it’s a website that just clicks or a project
              that truly makes a difference. And I’m always up for the next
              challenge!
            </Typography>

            <NextImage
              src="/about/blur-element-pink.png"
              width={1034}
              height={428}
              alt="blur pink element"
              className="hidden lg:block absolute w-[500px] right-24 -bottom-[3.8%] z-10 "
            />
          </div>
          <div className="relative lg:w-1/3 ">
            <div className="absolute lg:top-0 lg:left-0 lg:h-3/4 lg:w-px lg:bg-blackstone-500 z-20"></div>
            <div className="h-[600px] w-full hidden lg:block">
              <NextImage
                src="/about/nadia.png"
                width={1208}
                height={1884}
                alt="nadia"
                className="object-fit w-96 "
              />
            </div>
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
              className="absolute bottom-0 w-96 -left-[35%] hidden lg:block z-0"
            />
            <NextImage
              src="/about/blur-element-purple.png"
              width={368}
              height={725}
              alt="purple blurred element"
              className="absolute top-2 w-44 -left-[45%] hidden lg:block -z-0"
            />
          </div>
        </div>
        <div className="w-full">
          <LineSeparator className="border-[0.5px] border-blackstone-200" />
        </div>
      </>
      <SectionSeparator
        numberFirst={false}
        number="01"
        firstTitle="RECENT"
        secondTitle="PROJECTS"
      />
      <>
        <div className="w-full mt-2">
          <LineSeparator className="border-[0.5px] border-blackstone-200" />
        </div>
        <div className="px-6 lg:px-0 w-full py-12 flex space-x-12 overflow-x-auto container-snap lg:hidden">
          <div className="border-blackstone-500 border-[0.3px] flex flex-col items-center w-[300px] flex-shrink-0">
            <Typography
              className="font-bold py-2"
              as="p"
              variant="p"
              font="montserrat"
            >
              PROJECT #1
            </Typography>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center py-4">
              <Typography
                as="p"
                variant="p"
                className="font-bold"
                font="montserrat"
              >
                INILHOITS! 2024
              </Typography>
              <Typography as="p" variant="p">
                Staff Frontend
              </Typography>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center px-1 py-4 text-balance">
              <Typography className="text-center text-balance">
                Lorem ipsum dolor sit a Lorem ipsum Lorem dolor sit a ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum dolor sit a Lorem ipsum
              </Typography>
              <div className="flex items-center space-x-2 justify-center mt-2 group">
                <Typography className="underline group-hover:cursor-pointer">
                  See the web
                </Typography>
                <NextImage
                  src="/icon/arrow.svg"
                  width={24}
                  height={22}
                  alt="arrow"
                  className="group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all w-4"
                />
              </div>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="w-full mx-auto p-2">
              <div className="flex flex-col space-y-2 h-full">
                <div className="flex justify-between space-x-2 items-start">
                  <div className="w-1/2 flex flex-col space-y-2">
                    <div className="w-full bg-gray-200 h-40">pict1</div>
                    <div className="w-full bg-gray-200 h-20">pict2</div>
                    <div className="w-full bg-gray-200 h-20">pict3</div>
                  </div>
                  <div className="w-1/2 space-y-2 flex flex-col justify-between items-end">
                    <div className="w-full bg-gray-200 h-20">pict4</div>
                    <div className="w-full bg-gray-200 h-[248px]">pict5</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-20">pict6</div>
              </div>
            </div>
          </div>

          <div className="border-blackstone-500 border-[0.3px] flex flex-col items-center w-[300px] flex-shrink-0">
            <Typography
              className="font-bold py-2"
              as="p"
              variant="p"
              font="montserrat"
            >
              PROJECT #1
            </Typography>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center py-4">
              <Typography
                as="p"
                variant="p"
                className="font-bold"
                font="montserrat"
              >
                INILHOITS! 2024
              </Typography>
              <Typography as="p" variant="p">
                Staff Frontend
              </Typography>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center px-1 py-4 text-balance">
              <Typography className="text-center text-balance">
                Lorem ipsum dolor sit a Lorem ipsum Lorem dolor sit a ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum dolor sit a Lorem ipsum
              </Typography>
              <div className="flex items-center space-x-2 justify-center mt-2 group">
                <Typography className="underline group-hover:cursor-pointer">
                  See the web
                </Typography>
                <NextImage
                  src="/icon/arrow.svg"
                  width={24}
                  height={22}
                  alt="arrow"
                  className="group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all w-4"
                />
              </div>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="w-full mx-auto p-2">
              <div className="flex flex-col space-y-2 h-full">
                <div className="flex justify-between space-x-2 items-start">
                  <div className="w-1/2 flex flex-col space-y-2">
                    <div className="w-full bg-gray-200 h-40">pict1</div>
                    <div className="w-full bg-gray-200 h-20">pict2</div>
                    <div className="w-full bg-gray-200 h-20">pict3</div>
                  </div>
                  <div className="w-1/2 space-y-2 flex flex-col justify-between items-end">
                    <div className="w-full bg-gray-200 h-20">pict4</div>
                    <div className="w-full bg-gray-200 h-[248px]">pict5</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-20">pict6</div>
              </div>
            </div>
          </div>

          <div className="border-blackstone-500 border-[0.3px] flex flex-col items-center w-[300px] flex-shrink-0">
            <Typography
              className="font-bold py-2"
              as="p"
              variant="p"
              font="montserrat"
            >
              PROJECT #1
            </Typography>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center py-4">
              <Typography
                as="p"
                variant="p"
                className="font-bold"
                font="montserrat"
              >
                INILHOITS! 2024
              </Typography>
              <Typography as="p" variant="p">
                Staff Frontend
              </Typography>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center px-1 py-4 text-balance">
              <Typography className="text-center text-balance">
                Lorem ipsum dolor sit a Lorem ipsum Lorem dolor sit a ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum dolor sit a Lorem ipsum
              </Typography>
              <div className="flex items-center space-x-2 justify-center mt-2 group">
                <Typography className="underline group-hover:cursor-pointer">
                  See the web
                </Typography>
                <NextImage
                  src="/icon/arrow.svg"
                  width={24}
                  height={22}
                  alt="arrow"
                  className="group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all w-4"
                />
              </div>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="w-full mx-auto p-2">
              <div className="flex flex-col space-y-2 h-full">
                <div className="flex justify-between space-x-2 items-start">
                  <div className="w-1/2 flex flex-col space-y-2">
                    <div className="w-full bg-gray-200 h-40">pict1</div>
                    <div className="w-full bg-gray-200 h-20">pict2</div>
                    <div className="w-full bg-gray-200 h-20">pict3</div>
                  </div>
                  <div className="w-1/2 space-y-2 flex flex-col justify-between items-end">
                    <div className="w-full bg-gray-200 h-20">pict4</div>
                    <div className="w-full bg-gray-200 h-[248px]">pict5</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-20">pict6</div>
              </div>
            </div>
          </div>

          <div className="border-blackstone-500 border-[0.3px] flex flex-col items-center w-[300px] flex-shrink-0">
            <Typography
              className="font-bold py-2"
              as="p"
              variant="p"
              font="montserrat"
            >
              PROJECT #1
            </Typography>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center py-4">
              <Typography
                as="p"
                variant="p"
                className="font-bold"
                font="montserrat"
              >
                INILHOITS! 2024
              </Typography>
              <Typography as="p" variant="p">
                Staff Frontend
              </Typography>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="flex flex-col items-center justify-center px-1 py-4 text-balance">
              <Typography className="text-center text-balance">
                Lorem ipsum dolor sit a Lorem ipsum Lorem dolor sit a ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum dolor sit a Lorem ipsum
              </Typography>
              <div className="flex items-center space-x-2 justify-center mt-2 group">
                <Typography className="underline group-hover:cursor-pointer">
                  See the web
                </Typography>
                <NextImage
                  src="/icon/arrow.svg"
                  width={24}
                  height={22}
                  alt="arrow"
                  className="group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all w-4"
                />
              </div>
            </div>
            <LineSeparator className="border-[0.5px] border-blackstone-200" />
            <div className="w-full mx-auto p-2">
              <div className="flex flex-col space-y-2 h-full">
                <div className="flex justify-between space-x-2 items-start">
                  <div className="w-1/2 flex flex-col space-y-2">
                    <div className="w-full bg-gray-200 h-40">pict1</div>
                    <div className="w-full bg-gray-200 h-20">pict2</div>
                    <div className="w-full bg-gray-200 h-20">pict3</div>
                  </div>
                  <div className="w-1/2 space-y-2 flex flex-col justify-between items-end">
                    <div className="w-full bg-gray-200 h-20">pict4</div>
                    <div className="w-full bg-gray-200 h-[248px]">pict5</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-20">pict6</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Slider />
        </div>
        <LineSeparator className="mb-96" />
      </>
    </main>
  );
}
