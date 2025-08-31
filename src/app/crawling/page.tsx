"use client";

import CrawlingForm from "./components/CrawlingForm";
import CrawlingTable from "./components/CrawlingTable";
import { useState } from "react";

export default function CrawlingPage() {
  const [results, setResults] = useState<any[]>([]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">은지's 크롤링</h1>
      <CrawlingForm onResults={setResults} />
      <CrawlingTable data={results} />
    </main>
  );
}