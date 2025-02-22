import { HeaderButton } from "@/components/button/HeaderButton";

export default function Header() {
  return (
    <header className="bg-parch03 sticky top-0 z-30 shadow-md">
      <div className="relative mx-auto">
        <nav className="mx-auto flex items-center justify-between px-8 py-2 md:px-16 md:py-4">
          <div className="flex items-center gap-x-6 md:order-2">
            <HeaderButton buttonText="Home" buttonLink="/" />
            <HeaderButton buttonText="Projects" buttonLink="/projects" />
            <HeaderButton buttonText="CV" buttonLink="/CV.pdf" target="_blank" />
          </div>
        </nav>
      </div>
    </header>
  );
}
