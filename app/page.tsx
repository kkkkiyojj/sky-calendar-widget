import MiniCalendarWidget from "../components/MiniCalendarWidget";

export default function Home() {
  return (
    // 노션 임베드용: 화면 꽉 채우는 레이아웃(min-h-screen) 금지
    <main className="p-0 m-0">
      <MiniCalendarWidget />
    </main>
  );
}
