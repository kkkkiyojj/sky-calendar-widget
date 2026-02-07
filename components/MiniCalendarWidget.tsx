"use client";

type Props = {
  /** 테스트/고정표시용. 안 주면 오늘 날짜. */
  date?: Date;
  /** 카드 가로/세로(px). 기본: 156x156 (작고 컴팩트) */
  size?: number;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function MiniCalendarWidget({ date, size = 156 }: Props) {
  const d = date ?? new Date();

  const month = pad2(d.getMonth() + 1);
  const day = pad2(d.getDate());

  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }); // Monday...
  // 위젯이라 깔끔하게 3~4글자 축약 원하면 아래로 교체:
  // const weekday = d.toLocaleDateString("en-US", { weekday: "short" }); // Mon...

  return (
    <div
      style={{ width: size, height: size }}
      className="
        relative overflow-hidden rounded-2xl
        border border-white/60
        bg-white/22
        backdrop-blur-md
        shadow-[0_10px_30px_rgba(30,80,140,0.18)]
      "
    >
      {/* sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-200 to-blue-200" />

      {/* subtle highlight */}
      <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/35 blur-2xl" />
      <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-white/25 blur-2xl" />

      {/* content */}
      <div className="relative h-full w-full p-3">
        <div className="grid h-full grid-cols-2 gap-2">
          {/* MONTH */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[10px] tracking-[0.25em] text-slate-700/75">
              MONTH
            </div>
            <div className="mt-1 text-4xl font-semibold leading-none text-slate-900/90">
              {month}
            </div>
          </div>

          {/* DAY */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[10px] tracking-[0.25em] text-slate-700/75">
              DAY
            </div>
            <div className="mt-1 text-4xl font-semibold leading-none text-slate-900/90">
              {day}
            </div>
            <div className="mt-1 text-[12px] font-medium tracking-wide text-slate-700/85">
              {weekday}
            </div>
          </div>
        </div>
      </div>

      {/* blurred border feel */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
    </div>
  );
}
