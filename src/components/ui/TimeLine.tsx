import { TimelineElementProps } from "@/types";
import React from "react";

export const TimelineElement: React.FC<TimelineElementProps> = ({
  children,
}) => {
  return (
    <div
      className={`timeline-el relative flex flex-col border-l border-teal11 ml-6 w-full`}
    >
      <div
        className={`absolute rounded-full border-4 border-teal11 bg-parch01 z-10 -ml-2 mt-2 h-4 w-4`}
      ></div>
      <div className="pb-5 pl-10">{children}</div>
    </div>
  );
};
