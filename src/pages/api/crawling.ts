import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { source } = req.query;

  if (source === "naver") {
    try {
      const apiUrl =
        "https://datalab.naver.com/shoppingInsight/getCategoryKeywordRank.naver?cid=50000005&timeUnit=date&startDate=2025-08-01&endDate=2025-08-30&age=all&gender=all";

      const response = await fetch(apiUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
          "Accept": "application/json",
        },
      });
      const text = await response.text();
      console.log("네이버 Raw Response:", text.slice(0, 500));

      let data;
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        console.error("네이버 JSON 파싱 실패:", parseErr);
        return res.status(500).json({ error: "네이버 JSON 파싱 실패", raw: text.slice(0, 200) });
      }

      const items =
        data?.keywordList?.slice(0, 10).map((item: any, idx: number) => ({
          rank: idx + 1,
          keyword: item.keyword,
        })) || [];
      console.log("추출된 items:", items);

      return res.status(200).json(items);
    } catch (err) {
      console.error("네이버 JSON API 크롤링 실패:", err);
      return res.status(500).json({ error: "네이버 크롤링 실패" });
    }
  } else {
    return res.status(400).json({ error: "Invalid source parameter" });
  }
}