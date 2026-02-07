"use client";

type Props = {
  date?: Date;
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function MiniCalendarWidget({ date }: Props) {
  const d = date ?? new Date();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

  // 노션 7cm 근처: 약 260px
  const outerW = 280;      // 큰 흰 네모
  const outerH = 160;
  const outerPad = 12;

  const panelPad = 12;     // 중간 연한 하늘 패널 안쪽 여백
  const gap = 10;

  return (
    <div
      style={{ width: outerW, height: outerH, padding: outerPad }}
      className="
        relative overflow-hidden rounded-[22px]
        bg-white
        shadow-[0_14px_30px_rgba(120,150,180,0.18)]
      "
    >
      {/* 흰 네모 인셋 라인 */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)]" />

      {/* 중간 연한 하늘 패널 */}
      <div
        style={{ padding: panelPad }}
        className="
          relative h-full w-full overflow-hidden rounded-[18px]
          bg-[#edf7ff]
        "
      >
        {/* 패널 은은한 테두리/헤이즈 */}
        <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.70)]" />
        <div className="pointer-events-none absolute -top-14 -left-16 h-40 w-40 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/32 blur-3xl" />

        {/* 카드 2개 */}
        <div className="relative flex h-full" style={{ gap }}>
          <InnerCard label="MONTH" main={month} />
          <InnerCard label="DAY" main={day} footer={weekday} />
        </div>
      </div>
    </div>
  );
}

function InnerCard({
  label,
  main,
  footer
}: {
  label: "MONTH" | "DAY";
  main: string;
  footer?: string;
}) {
  return (
    <div
      className="
        relative flex-1 overflow-hidden rounded-[18px]
        bg-[#cfe3f6]
        shadow-[0_10px_18px_rgba(120,150,180,0.20)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]" />
      <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-white/30 blur-2xl" />

      <div className="relative h-full w-full px-4 py-3 flex flex-col">
        <div className="text-[10px] font-semibold tracking-[0.26em] text-white/80">
          {label}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-[52px] font-semibold leading-none text-white">
            {main}
          </div>
        </div>

        {footer ? (
          <div className="text-[10px] font-semibold tracking-[0.22em] text-white/80 text-right">
            {footer}
          </div>
        ) : (
          <div className="h-[14px]" />
        )}
      </div>
    </div>
  );
}
app/page.tsx는 이 상태 유지 (중앙정렬)
(너가 이미 바꿨다면 그대로 두면 됨)

import MiniCalendarWidget from "../components/MiniCalendarWidget";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center overflow-hidden p-0 m-0">
      <MiniCalendarWidget />
    </main>
  );
}
