"use client";

import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function InfoRequestCard({
  isButtonDisabled,
  onRequest,
}: {
  isButtonDisabled: boolean;
  onRequest: () => void;
}) {
  return (
    <Card>
      <div className="flex flex-col sm:gap-1">
        <p>{"const myHeaders = new Headers()"}</p>
        <p>{"myHeaders.append('Authorization', 'Bearer ahmadaldali')"}</p>
        <p>{"const requestOptions = {method: 'GET', headers: myHeaders}"}</p>
        <p>
          {
            "fetch('https://api.ahmad-aldali.me/users/1', requestOptions).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.error(error));"
          }
        </p>
      </div>

      <Button text="Run code" onClick={onRequest} isDisabled={isButtonDisabled} />
    </Card>
  );
}
