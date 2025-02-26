"use client";

import InfoQueryCard from "@/components/contact/InfoQueryCard";
import InfoQueryResultCard from "@/components/contact/InfoQueryResultCard";
import InfoRequestCard from "@/components/contact/InfoRequestCard";
import InfoResponseCard from "@/components/contact/InfoResponseCard";
import { useState } from "react";

export default function ConactPage() {
  const [isInfoVisible, sendRequest] = useState(false);
  const [isQueryResultVisible, runQuery] = useState(false);

  return (
    <div className="w-full flex-grow overflow-y-auto p-6 gap-4 flex flex-col">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
        <InfoRequestCard isButtonDisabled={isInfoVisible} onRequest={() => sendRequest(true)} />
        {isInfoVisible && <InfoResponseCard />}
      </div>

      {isInfoVisible && (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <InfoQueryCard isButtonDisabled={isQueryResultVisible} onRun={() => runQuery(true)} />
          {isQueryResultVisible && <InfoQueryResultCard />}
        </div>
      )}
    </div>
  );
}
