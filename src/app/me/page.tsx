"use client";

import InfoQueryCard from "@/components/me-page/InfoQueryCard";
import InfoQueryResultCard from "@/components/me-page/InfoQueryResultCard";
import InfoRequestCard from "@/components/me-page/InfoRequestCard";
import InfoResponseCard from "@/components/me-page/InfoResponseCard";
import WebsiteCard from "@/components/me-page/WebsiteCard";
import WebsiteSummaryCard from "@/components/me-page/WebsiteSummaryCard";
import Image from "next/image";
import { useState } from "react";

export default function ConactPage() {
  const [isInfoVisible, sendRequest] = useState(false);
  const [isQueryResultVisible, runQuery] = useState(false);
  const [isWebsiteSummaryVisible, showSummary] = useState(false);

  return (
    <div className="w-full flex-grow overflow-y-auto p-4 gap-4 flex flex-col">
      <div className="flex items-center justify-center w-full rounded-3xl">
        <a
          href="https://github.com/aal181223"
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden border"
          aria-label="View GitHub Profile"
        >
          <Image
            aria-hidden
            src="/images/contributions-2024.png"
            alt="contributions 2024"
            width={600}
            height={300}
          />
        </a>
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
        <InfoRequestCard
          isButtonDisabled={isInfoVisible}
          onRequest={() => sendRequest(true)}
        />
        {isInfoVisible && <InfoResponseCard />}
      </div>

      {isInfoVisible && (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <InfoQueryCard
            isButtonDisabled={isQueryResultVisible}
            onRun={() => runQuery(true)}
          />
          {isQueryResultVisible && <InfoQueryResultCard />}
        </div>
      )}

      {isQueryResultVisible && (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <WebsiteCard
            isButtonDisabled={isWebsiteSummaryVisible}
            onShow={() => showSummary(true)}
          />
          {isWebsiteSummaryVisible && <WebsiteSummaryCard />}
        </div>
      )}
    </div>
  );
}
