import About from "@/components/about/About";
import Intro from "@/components/about/Intro";
import Companies from "@/components/company/Companies";
import CompaniesMarquee from "@/components/company/CompaniesMarquee";
import Projects from "@/components/project/Projects";
import { pagesRoutes } from "@/route";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ahmad Aldali | Homepage",
};

export default function Home() {
  return (
    <main className="flex-grow overflow-y-auto flex-col gap-8 items-center sm:items-start grid place-items-center bg-parch03 bg-cover">
      <div className="container mx-auto h-full p-6 bg-parch01 border-2 border-parch06 rounded-b-lg">
        <div className="flex flex-col sm:flex-row sm:content-stretch sm:items-stretch sm:pt-8">
          <div
            className="gap-4 md:top-8 md:rounded-l-3xl md:rounded-br-none order-1 sticky rounded-none sm:order-1 sm:flex sm:w-2/5 sm:flex-col sm:rounded-l-3xl sm:rounded-br-none
          items-center"
          >
            <Intro />
            <Companies />
            <CompaniesMarquee />
          </div>

          <div className="block order-2 sm:flex sm:w-3/5 sm:flex-col">
            <About />
            <Projects />

            <a
              className="group hover:cursor-pointer hover:underline decoration-teal10 flex gap-2 mt-2"
              href={pagesRoutes.projects}
              target="_blank"
            >
              <strong className="text-teal10">Curious to discover all? </strong>
              <Image
                className="group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden
                src="/svg/go.svg"
                alt="Navigation icon"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
