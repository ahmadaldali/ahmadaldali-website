"use client";

import InfoQueryCard from "@/components/me-page/InfoQueryCard";
import InfoQueryResultCard from "@/components/me-page/InfoQueryResultCard";
import InfoRequestCard from "@/components/me-page/InfoRequestCard";
import InfoResponseCard from "@/components/me-page/InfoResponseCard";
import WebsiteCard from "@/components/me-page/WebsiteCard";
import WebsiteSummaryCard from "@/components/me-page/WebsiteSummaryCard";
import { useState } from "react";

export default function ConactPage() {
  const [isInfoVisible, sendRequest] = useState(false);
  const [isQueryResultVisible, runQuery] = useState(false);
  const [isWebsiteSummaryVisible, showSummary] = useState(false);

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

      {isQueryResultVisible && (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <WebsiteCard isButtonDisabled={isWebsiteSummaryVisible} onShow={() => showSummary(true)} />
          {isWebsiteSummaryVisible && <WebsiteSummaryCard />}
        </div>
      )}

    </div>
  );
}
