import clsxm from "@/lib/clsxm";
import React from "react";

export enum TypographyVariant {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "t",
  "p",
  "bt",
  "c",
  "c12",
  "blank",
}

enum FontVariant {
  "montserrat",
  "playfairdisplay",
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  className,
  font = "montserrat",
  variant = "p",
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || "p";
  return (
    <Component
      className={clsxm(
        // *=============== Font Type ==================
        [
          font === "montserrat" && ["font-montserrat"],
          font === "playfairdisplay" && ["font-playfairdisplay"],
        ],
        // *=============== Font Variants ==================
        [
          variant === "h1" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[80px] md:leading-[96px]",
            ],
          variant === "h2" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[72px] md:leading-[88px]",
            ],
          variant === "h3" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[64px] md:leading-[72px]",
            ],
          variant === "h4" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[48px] md:leading-[56px]",
            ],
          variant === "h5" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[32px] md:leading-[42px]",
            ],
          variant === "h6" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[24px] md:leading-[30px]",
            ],
          variant === "t" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[20px] md:leading-[24px]",
            ],
          variant === "p" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[18px] md:leading-[24px]",
            ],
          variant === "bt" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[16px] md:leading-[24px]",
            ],
          variant === "c" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[14px] md:leading-[18px]",
            ],
          variant === "c12" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "md:text-[12px] md:leading-[18px]",
            ],
          variant === "blank" &&
            (font === "montserrat" || font === "playfairdisplay") && [
              "leading-none",
            ],
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
