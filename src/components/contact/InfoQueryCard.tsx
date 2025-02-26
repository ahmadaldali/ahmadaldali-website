"use client";

import { ContactCard } from "@/components/contact/ContactCard";
import Button from "../ui/Button";

export default function InfoQueryCard({
  isButtonDisabled,
  onRun
}: {
  isButtonDisabled: boolean;
  onRun: () => void;
}) {

  return (
    <ContactCard>
      <div className="flex flex-col sm:gap-1">
        <p>{"select experience, main_skills from users where id=1;"}</p>
      </div>

      <Button isDisabled={isButtonDisabled} text="Run query" onClick={onRun} />
    </ContactCard>
  );
}
