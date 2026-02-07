"use client";

type Props = {
  date?: Date;          // 안 주면 오늘
  cardSize?: number;    // 카드 한 장 크기(px)
  gap?: number;         // 카드 사이 간격(px)
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function MiniCalendarWidget({
  date,
  cardSize = 104,
  gap = 10
}: Props) {
  const d = date ?? new Date();
  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

  return (
    <div className="inline-flex flex-col items-center">
      <div className="inline-flex" style={{ gap }}>
        <SoftCard label="MONTH" value={month} size={cardSize} />
        <SoftCard label="DAY" value={day} size={cardSize} />
      </div>

      <div
        className="mt-2 text-[11px] font-medium tracking-[0.22em] text-slate-600/80"
        aria-label="weekday"
      >
        {weekday}
      </div>
    </div>
  );
}

function SoftCard({
  label,
  value,
  size
}: {
  label: "MONTH" | "DAY";
  value: string;
  size: number;
}) {
  return (
    <div
      className="
        relative overflow-hidden rounded-[18px]
        bg-[#eaf3fb]
        shadow-[0_10px_24px_rgba(120,160,200,0.18)]
      "
      style={{ width: size, height: size }}
    >
      {/* 말랑한 테두리(인셋) */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]" />

      {/* 살짝 밝은 헤이즈 */}
      <div className="pointer-events-none absolute -top-8 -left-10 h-24 w-24 rounded-full bg-white/55 blur-xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-white/35 blur-xl" />

      <div className="relative h-full w-full px-3 py-2">
        <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-600/70">
          {label}
        </div>

        <div className="mt-2 text-[46px] font-semibold leading-none text-slate-700/85">
          {value}
        </div>
      </div>
    </div>
  );
}
