import Image from "next/image";
import React, { useState } from "react";
import { Card } from "./Card";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  timeout?: number;
  children: React.ReactNode;
}

export const CardLoader: React.FC<CardProps> = ({ timeout = 2000, children }) => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, timeout);

  return (
    <Card>
      {loader && (
        <div className="flex justify-center items-center w-full h-full">
          <Image
            aria-hidden
            src="/svg/loader.svg"
            alt="loader icon"
            width={100}
            height={100}
          />
        </div>
      )}

      {!loader && children}
    </Card>
  );
};
