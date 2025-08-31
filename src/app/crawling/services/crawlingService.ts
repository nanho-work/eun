const crawlingService = {
  async fetchData(source: string) {
    const res = await fetch(`/api/crawling?source=${source}`);
    if (!res.ok) {
      throw new Error("크롤링 API 요청 실패");
    }
    return res.json();
  },
};

export default crawlingService;