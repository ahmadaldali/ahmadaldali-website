import { CardLoader } from "@/components/ui/CardLoader";

export default function WebsiteSummaryCard() {
  return (
    <CardLoader timeout={10}>
      <div className="flex flex-col sm:gap-1 justify-center h-full">
        <strong className="text-left text-xl text-purple12">
          Coded in Visual Studio Code. Built with Next.js and Tailwind CSS,
          deployed with Vercel. Made with Passion and ❤️
        </strong>
      </div>
    </CardLoader>
  );
}
