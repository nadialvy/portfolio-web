"use client";
import { useState } from "react";
import Typography from "./Typography";
import LineSeparator from "./LineSeparator";
import NextImage from "./NextImage";
import HorizontalScrollCard from "./HorizontalScrollCard";

export default function Slider() {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { id: 1, content: "This is the first card" },
    { id: 2, content: "This is the second card" },
    { id: 3, content: "This is the 3 card" },
    { id: 4, content: "This is the 4 card" },
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  return (
    <div className="flex flex-row space-x-6 items-center justify-between mx-auto max-w-[1015px]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-outborder-[0.3px] max-w-[900px]"
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-full border-blackstone-500 border-[0.3px] my-12 h-full"
            >
              <div className="flex h-full">
                <div className="flex h-[360px]">
                  <Typography
                    className="[writing-mode:vertical-lr] text-center font-bold px-2 leading-none mx-auto"
                    font="montserrat"
                  >
                    PROJECT #{card.id}
                  </Typography>
                  <LineSeparator
                    className="border-[0.5px] border-blackstone-200"
                    isHorizontal={false}
                  />
                </div>

                <div className=" w-1/3">
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
                  <div className="flex flex-col items-center justify-center p-4 text-balance h-[280px]">
                    <Typography
                      as="p"
                      variant="bt"
                      className="text-center text-balance"
                    >
                      Lorem ipsum dolor sit a Lorem ipsum Lorem dolor sit a
                      ipsum Lorem ipsum Lorem ipsum Lorem ipsum dolor sit a
                      Lorem ipsum
                    </Typography>
                    <div className="flex items-center space-x-2 justify-center mt-2 group">
                      <Typography className="underline group-hover:cursor-pointer">
                        See the web
                      </Typography>
                      <NextImage
                        src="/icon/arrow.png"
                        width={24}
                        height={22}
                        alt="arrow"
                        className="group-hover:cursor-pointer group-hover:rotate-45 duration-300 transition-all w-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[360px]">
                  <LineSeparator
                    className="border-[0.5px] border-blackstone-200"
                    isHorizontal={false}
                  />
                </div>

                <div className="w-2/3">
                  <HorizontalScrollCard widthCard="w-56px" heightCard="h-72" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className="bg-black w-12 h-12 flex justify-center items-center rounded-full shadow-lg"
        >
          <NextImage
            src="/icon/arrow-white.png"
            width={351}
            height={432}
            alt="next arrow"
            className="w-4"
          />
        </button>
      </div>
    </div>
  );
}
