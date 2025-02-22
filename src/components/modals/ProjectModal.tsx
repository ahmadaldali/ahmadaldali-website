"use client";

import Modal from "@/components/ui/Modal";
import { TProject } from "@/types";
import ProjectTechnologies from "../project/ProjectTechnologies";
import { capitalize } from "@/libs/utils";
import Image from "next/image";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: TProject;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Modal open={isOpen} onClickOutside={onClose} onClickClose={onClose}>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <div className="flex gap-0.5">
              <strong className="text-xl">{capitalize(project.title)}</strong>
              {project.link && (
                <a
                  className="relative hover:cursor-pointer rotate-12"
                  href={project.link}
                  target="_blank"
                >
                  <Image
                    aria-hidden
                    src="/svg/navigation.svg"
                    alt="Navigation icon"
                    width={20}
                    height={20}
                  />
                </a>
              )}
            </div>
            <strong className="text-teal10"> Dec 2023 - Present </strong>
          </div>
          <ul className="list-disc list-inside">
            {project.tasks.map((task: string) => (
              <li key={task}>{task}</li>
            ))}
          </ul>

          <ProjectTechnologies project={project} />
        </div>
      </Modal>
    </>
  );
}
