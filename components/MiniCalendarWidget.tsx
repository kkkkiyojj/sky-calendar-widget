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
        bg-[#cfe4f6]
        shadow-[0_14px_30px_rgba(130,160,190,0.22)]
      "
      style={{ width, height }}
    >
      {/* 바깥 테두리/뽀얀 느낌 */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]" />
      <div className="pointer-events-none absolute -top-10 -left-14 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-16 h-36 w-36 rounded-full bg-white/18 blur-2xl" />

      <div className="relative h-full w-full p-[10px]">
        <div className="flex h-full" style={{ gap }}>
          {/* MONTH 카드 */}
          <InnerCard label="MONTH" main={month} />

          {/* DAY 카드 + 요일 */}
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
        bg-white/18
      "
    >
      {/* 카드 테두리(아주 은은) */}
      <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
      {/* 카드 안쪽 하이라이트 */}
      <div className="pointer-events-none absolute -top-8 -left-10 h-24 w-24 rounded-full bg-white/18 blur-xl" />

      <div className="relative h-full w-full px-3 pt-2 pb-2 flex flex-col">
        <div className="text-[10px] font-semibold tracking-[0.26em] text-white/70">
          {label}
        </div>

        <div className="mt-1 text-[54px] font-semibold leading-none text-white">
          {main}
        </div>

        {footer ? (
          <div className="mt-auto text-[10px] font-semibold tracking-[0.22em] text-white/75">
            {footer}
          </div>
        ) : (
          <div className="mt-auto" />
        )}
      </div>
    </div>
  );
}
