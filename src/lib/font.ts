import localFont from "next/font/local";

export const Montserrat = localFont({
  src: [
    {
      path: "../styles/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-montserrat",
})

export const PlayfairDisplay = localFont({
  src: [
    {
      path: "../styles/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Playfair_Display/PlayfairDisplay-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/Playfair_Display/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-playfairdisplay",
})