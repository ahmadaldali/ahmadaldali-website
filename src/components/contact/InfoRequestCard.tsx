"use client";

import { ContactCard } from "@/components/contact/ContactCard";
import Button from "@/components/ui/Button";

export default function InfoRequestCard({
  isButtonDisabled,
  onRequest,
}: {
  isButtonDisabled: boolean;
  onRequest: () => void;
}) {
  return (
    <ContactCard>
      <div className="flex flex-col sm:gap-1">
        <p>{"const myHeaders = new Headers()"}</p>
        <p>{"myHeaders.append('Authorization', 'Bearer ahmadaldali')"}</p>
        <p>{"const requestOptions = {method: 'GET', headers: myHeaders}"}</p>
        <p>
          {
            "fetch('https://api.ahmadaldali.me/users/1', requestOptions).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.error(error));"
          }
        </p>
      </div>

      <Button text="Run code" onClick={onRequest} isDisabled={isButtonDisabled} />
    </ContactCard>
  );
}
