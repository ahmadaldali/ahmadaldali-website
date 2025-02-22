import Table from "@/components/ui/Table";
import { projects } from "@/libs/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ahmad Aldali | Projects',
};

export default function ProjectsPage() {
  const columns = [
    { id: 'title', label: 'Title' },
    { id: 'description', label: 'Description' },
    { id: 'technologies', label: 'Technologies' },
  ];

  return (
    <div className="w-full flex-grow overflow-y-auto sm:p-6">
      <Table columns={columns} rows={projects} />
    </div>
  );
}
