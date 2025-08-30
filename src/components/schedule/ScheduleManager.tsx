import Button from "../ui/Button";

export default function ScheduleManager() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">PT 스케줄 관리</h1>
            <div className="mb-4">
                <Button variant="primary">일정 추가</Button>
            </div>
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-orange-200">
                    <tr>
                        <th className="border px-2 py-1">회원명</th>
                        <th className="border px-2 py-1">트레이너</th>
                        <th className="border px-2 py-1">날짜</th>
                        <th className="border px-2 py-1">시간</th>
                        <th className="border px-2 py-1">수업</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="border px-2 py-1">홍길동</td>
                        <td className="border px-2 py-1">김트레이너</td>
                        <td className="border px-2 py-1">2025-09-01</td>
                        <td className="border px-2 py-1">10:00</td>
                        <td className="border px-2 py-1">수업</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}