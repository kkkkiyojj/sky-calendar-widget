"use client";

type Props = {
  date?: Date;
  width?: number;   // 큰 블록 가로
  height?: number;  // 큰 블록 세로
  padding?: number; // 큰 블록 안쪽 여백
  gap?: number;     // 카드 사이 간격
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function MiniCalendarWidget({
  date,
  width = 260,
  height = 142,
  padding = 12,
  gap = 10
}: Props) {
  const d = date ?? new Date();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

  return (
    <div
      style={{ width, height, padding }}
      className="
        relative overflow-hidden rounded-[22px]
        bg-[#eaf5ff]
        shadow-[0_18px_36px_rgba(120,150,180,0.20)]
      "
    >
      {/* 큰 블록 테두리/뽀얀 느낌 */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.70)]" />
      <div className="pointer-events-none absolute -top-14 -left-16 h-44 w-44 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-white/28 blur-3xl" />

      <div className="relative h-full w-full flex" style={{ gap }}>
        <InnerCard label="MONTH" main={month} />
        <InnerCard label="DAY" main={day} footer={weekday} />
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
        shadow-[0_14px_26px_rgba(120,150,180,0.25)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]" />
      <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-white/30 blur-2xl" />

      {/* 위 라벨 / 가운데 숫자 / 아래 요일 */}
      <div className="relative h-full w-full px-4 py-3 flex flex-col">
        <div className="text-[10px] font-semibold tracking-[0.26em] text-white/80">
          {label}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-[54px] font-semibold leading-none text-white">
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
