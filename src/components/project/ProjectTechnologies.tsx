import Badge from "@/components/ui/Badge";
import { TProject } from "@/types";

export default function ProjectTechnologies({ project }: { project: TProject }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
      {project.technologies.map((technology: string, index: number) => (
        <Badge key={index} text={technology} />
      ))}
    </div>
  );
}
