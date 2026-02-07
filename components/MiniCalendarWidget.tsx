"use client";

type Props = {
  date?: Date;        // 안 주면 오늘
  width?: number;     // 전체 위젯 가로(px)
  height?: number;    // 전체 위젯 세로(px)
  gap?: number;       // 두 카드 사이 간격(px)
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function MiniCalendarWidget({
  date,
  width = 250,
  height = 135,
  gap = 10
}: Props) {
  const d = date ?? new Date();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

  return (
    <div
      className="
        relative overflow-hidden rounded-[18px]
        bg-[#e8f3ff]
        shadow-[0_14px_30px_rgba(130,160,190,0.18)]
      "
      style={{ width, height }}
    >
      {/* 바깥 테두리/뽀얀 느낌 */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]" />
      <div className="pointer-events-none absolute -top-10 -left-14 h-32 w-32 rounded-full bg-white/28 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-16 h-36 w-36 rounded-full bg-white/22 blur-2xl" />

      <div className="relative h-full w-full p-[10px]">
        <div className="flex h-full" style={{ gap }}>
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
  label: string;
  main: string;
  footer?: string;
}) {
  return (
    <div
      className="
        relative flex-1 overflow-hidden rounded-[14px]
        bg-[#bcd9f3]/55
      "
    >
      {/* 카드 테두리(아주 은은) */}
      <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]" />
      {/* 카드 안쪽 하이라이트 */}
      <div className="pointer-events-none absolute -top-8 -left-10 h-24 w-24 rounded-full bg-white/18 blur-xl" />

      {/* 레이아웃: 위 라벨 / 가운데 숫자 / 아래 요일 */}
      <div className="relative h-full w-full px-3 py-2 flex flex-col">
        {/* 상단 라벨 */}
        <div className="text-[10px] font-semibold tracking-[0.26em] text-white/75">
          {label}
        </div>

        {/* 가운데 숫자 (완전 중앙) */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[54px] font-semibold leading-none text-white">
            {main}
          </div>
        </div>

        {/* 하단 요일 (DAY 카드만) */}
        {footer ? (
          <div className="text-[10px] font-semibold tracking-[0.22em] text-white/75 text-right">
            {footer}
          </div>
        ) : (
          <div className="h-[14px]" />
        )}
      </div>
    </div>
  );
}
