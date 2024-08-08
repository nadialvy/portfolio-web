"use client";

import "aos/dist/aos.css";

import Aos from "aos";
import { useEffect } from "react";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init();
  });
  return <>{children}</>;
}
