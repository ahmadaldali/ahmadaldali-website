import { TCompany } from "@/types/company";
import Image from "next/image";

export default function Company({ company }: { company: TCompany }) {
  return (
    <div className="w-full flex flex-col gap-1">
      <p className="text-parch16 text-lg font-semibold">{company.name}</p>
      <p className="text-parch11 text-xs">{company.date}</p>
      <a
        href={company.link}
        target="_blank"
        className="group relative grid border-parch06 bg-parch02 justify-between gap-2 rounded-2xl border-2 transition-all sm:grid-cols-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 w-[80%] hover:bg-parch06
        hover:shadow-company-card duration-500 ease-in-out
        p-4"
      >
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div className="flex flex-col text-parch16 gap-1">
              <strong>
                <span>{company.position}</span>
              </strong>
              <div className="flex gap-1">
                <Image
                  aria-hidden
                  src="/svg/location.svg"
                  alt="Location icon"
                  width={16}
                  height={16}
                />
                <p> {company.location}</p>
              </div>
            </div>
          </h3>
        </div>
      </a>
    </div>
  );
}
