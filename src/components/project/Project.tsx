"use client";

import Image from "next/image";
import { TProject } from "@/types";
import { capitalize } from "@/libs/utils";
import { useState, useRef } from "react";
import ProjectModal from "@/components/modals/ProjectModal";
import ProjectTechnologies from "./ProjectTechnologies";
import { IsMobile } from "@/components/responsive/IsMobile";

export default function Project({ project }: { project: TProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMobile = IsMobile();

  const handleOpenModal = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = setTimeout(() => {
      setIsModalOpen(true);
      hoverTimeout.current = null;
    }, 200);
  };

  const handleCloseModal = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hover:cursor-pointer" onClick={handleOpenModal}>
        <div className="container mx-auto p-6 flex justify-between gap-5 bg-parch02 text-parch16 hover:bg-parch06 px-4 rounded-xl w-full hover:shadow-project-card transition-shadow duration-500 ease-in-out">
          {!isMobile && (
            <div className="flex flex-col items-center justify-center w-32 sm:min-w-32 gap-4">
              <Image
                width={128}
                height={80}
                src={project.picture}
                alt={project.title}
              />
              <strong className="text-teal10">
                {capitalize(project.title)}
              </strong>
            </div>
          )}

          <div className="flex flex-col items-center justify-center">
            <p className="leading-normal">{project.description}</p>

            <ProjectTechnologies project={project} />
          </div>
        </div>
      </div>

      {/* ProjectModal component */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
