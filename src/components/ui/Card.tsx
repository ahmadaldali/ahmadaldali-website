import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="group relative flex w-full flex-col items-start gap-2 rounded-xl transition-colors duration-300 ease-in-out sm:gap-5 bg-parch02 text-parch16  p-4">
      {children}
    </div>
  );
};
