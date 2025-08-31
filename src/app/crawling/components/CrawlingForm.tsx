"use client";

import { useState } from "react";
import crawlingService from "../services/crawlingService";

interface CrawlingFormProps {
  onResults: (data: any[]) => void;
}

export default function CrawlingForm({ onResults }: CrawlingFormProps) {
  const [source, setSource] = useState("google");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await crawlingService.fetchData(source);
      onResults(data);
    } catch (err) {
      console.error("크롤링 실패:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="border p-2 rounded mr-2"
      >
        <option value="google">Google Trends</option>
        <option value="naver">Naver DataLab</option>
      </select>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "수집 중..." : "크롤링 실행"}
      </button>
    </div>
  );
}