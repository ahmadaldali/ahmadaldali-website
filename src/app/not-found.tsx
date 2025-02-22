"use client";

import { pagesRoutes } from "@/route";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [happy, setHappy] = useState(false);

  const handleMouseOver = () => {
    setHappy(true);
  };

  const handleMouseOut = () => {
    setHappy(false);
  };

  return (
    <div className="w-full flex-grow overflow-y-auto flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center">
        <div>
          {happy ? (
            <Image
              aria-hidden
              src="/svg/happy-face.svg"
              alt="Found icon"
              width={120}
              height={120}
            />
          ) : (
            <Image
              aria-hidden
              src="/svg/sad-face.svg"
              alt="Not found icon"
              width={120}
              height={120}
            />
          )}
        </div>
        <div className="flex flex-col text-center text-3xl sm:text-5xl">
          <strong>404</strong>
          <span className="text-lg sm:text-2xl">Page not found</span>
        </div>
      </div>

      <Link href={pagesRoutes.homepage} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <strong className="underline">Go to happiness</strong>
      </Link>
    </div>
  );
}