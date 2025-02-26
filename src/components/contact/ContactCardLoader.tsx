import Image from "next/image";
import React, { useState } from "react";
import { ContactCard } from "./ContactCard";

interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ContactCardLoader: React.FC<ContactCardProps> = ({ children }) => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <ContactCard>
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
    </ContactCard>
  );
};
