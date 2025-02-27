"use client";

import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function InfoQueryCard({
  isButtonDisabled,
  onRun
}: {
  isButtonDisabled: boolean;
  onRun: () => void;
}) {

  return (
    <Card>
      <div className="flex flex-col sm:gap-1">
        <p>{"select experience, main_skills from users where id=1;"}</p>
      </div>

      <Button isDisabled={isButtonDisabled} text="Run query" onClick={onRun} />
    </Card>
  );
}
