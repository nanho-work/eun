"use client";

interface CrawlingTableProps {
  data: any[];
}

export default function CrawlingTable({ data }: CrawlingTableProps) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">결과가 없습니다.</p>;
  }

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">순위</th>
          <th className="border border-gray-300 px-4 py-2">키워드</th>
          <th className="border border-gray-300 px-4 py-2">검색량</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td className="border border-gray-300 px-4 py-2">{item.rank}</td>
            <td className="border border-gray-300 px-4 py-2">{item.keyword}</td>
            <td className="border border-gray-300 px-4 py-2">{item.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}