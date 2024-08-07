import NextImage from "@/components/NextImage";
import SectionSeparator from "@/components/SectionSeparator";
import Typography from "@/components/Typography";
import clsxm from "@/lib/clsxm";

export default function Home() {
  return (
    <main className="bg-whiteivory-500 min-h-screen w-full flex flex-col items-center justify-center">
      <>
        <div className="border-[0.3px] w-full border-blackstone-500 mt-4 z-20"></div>
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
            <div className="border-[0.3px] w-full border-blackstone-500 mt-6 z-20 relative"></div>

            <Typography
              font="montserrat"
              className="my-8 z-40 lg:pr-16 relative lg:mt-7"
              variant="bt"
            >
              Hello 👋🏻 <br className="lg:hidden" /> I&apos;m Nadia Lovely, a
              frontend developer who turns complex ideas into seamless digital
              experiences. My passion for business processes and innovation led
              me to major in Information Systems. Beyond coding, I dive into
              business plan competitions, bringing creative solutions to life.
              From startup, software house, university comitte, to freelancing,
              I&apos;ve led teams and driven projects to success, always focused
              on making an impact.
            </Typography>

            <NextImage
              src="/about/blur-element-pink.png"
              width={1034}
              height={428}
              alt="blur pink element"
              className="hidden lg:block absolute w-[500px] right-24 -bottom-[11%] z-10 "
            />
          </div>
          <div className="relative lg:w-1/3 lg:pl-6 ">
            <div className="absolute lg:top-0 lg:left-0 lg:h-3/4 lg:w-px lg:bg-blackstone-500 z-20"></div>
            <NextImage
              src="/about/nadia.png"
              width={1208}
              height={1884}
              alt="nadia"
              className="w-full hidden lg:block"
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
              className="absolute bottom-0 w-72 -left-[35%] hidden lg:block"
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
        <div className="border-[0.3px] w-full border-blackstone-500 z-20"></div>
      </>
      <SectionSeparator
        numberFirst={false}
        number="01"
        firstTitle="RECENT"
        secondTitle="PROJECTS"
      />
    </main>
  );
}
