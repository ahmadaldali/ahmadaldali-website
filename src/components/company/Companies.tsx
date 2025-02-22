import { TCompany } from "@/types/company";
import { companies } from "@/libs/company";
import Company from "./Company";
import { TimelineElement } from "@/components/ui/TimeLine";

export default function Companies() {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      {companies.map((company: TCompany) => (
        <TimelineElement key={company.id}>

          <Company company={company} />

        </TimelineElement>
      ))}
    </div>
  );
}
