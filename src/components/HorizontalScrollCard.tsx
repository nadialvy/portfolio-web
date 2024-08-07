"use client";
import { useState, useRef, useEffect } from "react";

type HorizontalScrollCardProps = {
  widthCard?: string;
  heightCard?: string;
};

export default function HorizontalScrollCard({
  widthCard = "w-56",
  heightCard = "h-96",
}: HorizontalScrollCardProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Explicitly type the ref to HTMLDivElement or null
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const totalScrollWidth =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const currentScrollPosition = scrollRef.current.scrollLeft;

      setScrollProgress((currentScrollPosition / totalScrollWidth) * 100);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[1015px] mx-auto p-6">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {[...Array(10).keys()].map((i) => (
          <div
            key={i}
            className={`flex-shrink-0 ${widthCard} ${heightCard} bg-gray-300 rounded-lg p-4`}
          >
            <h3 className="text-xl font-bold">Picture {i + 1}</h3>
            <p className="text-gray-600">This is picture number {i + 1}.</p>
          </div>
        ))}
      </div>
      <div className="relative mt-4 h-2 bg-white rounded-full">
        <div
          className="absolute h-2 bg-rosepink-300 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
