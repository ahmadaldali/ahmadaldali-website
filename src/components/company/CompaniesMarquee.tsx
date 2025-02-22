import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function CompaniesMarquee() {
  return (
    <div className="mx-6">
      <Marquee>
        <div className="flex gap-x-2 sm:gap-x-6 gap-y-4 items-center justify-center">
          <Image
            aria-hidden
            src="/images/companies/yoboo.svg"
            alt="yoboo"
            width={100}
            height={100}
          />

          <Image
            aria-hidden
            src="/images/companies/greppy.png"
            alt="greppy systems"
            width={100}
            height={100}
          />

          <Image
            aria-hidden
            src="/images/companies/zeour.svg"
            alt="zeour"
            width={100}
            height={100}
          />
        </div>
      </Marquee>
    </div>
  );
}
