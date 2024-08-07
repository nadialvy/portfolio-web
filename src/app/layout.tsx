import type { Metadata } from "next";
import { Montserrat, PlayfairDisplay } from "@/lib/font";
import "./globals.css";
import clsxm from "@/lib/clsxm";
import { BASE_METADATA } from "@/const/metadata";

export const metadata: Metadata = {
  ...BASE_METADATA,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsxm(Montserrat.variable, PlayfairDisplay.variable)}>
        {children}
      </body>
    </html>
  );
}
