import { projects } from "@/libs/project";
import { TProject } from "@/types";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="gap-2 flex flex-col" aria-label="projects">
      {projects.filter((project) => !!project.isStar).map((project: TProject) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
