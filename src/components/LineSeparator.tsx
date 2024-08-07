import React from "react";

export default function LineSeparator({
  className,
  isHorizontal = true,
}: {
  className?: string;
  isHorizontal?: boolean;
}) {
  return (
    <div
      className={`${
        isHorizontal ? "w-full h-[1px]" : "h-full w-[1px]"
      } border-blackstone-500 z-20 ${className}`}
    ></div>
  );
}
