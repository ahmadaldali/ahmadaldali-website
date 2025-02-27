"use client";

import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function WebsiteCard({
  isButtonDisabled,
  onShow
}: {
  isButtonDisabled: boolean;
  onShow: () => void;
}) {

  return (
    <Card>
      <div className="flex flex-col sm:gap-1">
        <p>{"<div className='flex flex-col sm:gap-1 justify-center h-full'><strong className='text-left text-xl text-purple12'>Coded in Visual Studio Code. Built with Next.js and Tailwind CSS, deployed with Vercel. Made with Passion and ❤️</strong></div>"}</p>
      </div>

      <Button isDisabled={isButtonDisabled} text="Show" onClick={onShow} />
    </Card>
  );
}
