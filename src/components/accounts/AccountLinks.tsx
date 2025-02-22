import Image from "next/image";

export default function AccountLinks() {
  return (
    <section className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/ahmadaldali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/svg/github.svg"
          alt="Github icon"
          width={16}
          height={16}
        />
        Github
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/ahmad-aldali/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/svg/linkedIn.svg"
          alt="LinkedIn icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.hackerearth.com/@ahmadaldali88/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/svg/hackerearth.svg"
          alt="Hackerearth icon"
          width={16}
          height={16}
        />
        Hackerearth
      </a>
    </section>
  );
}
