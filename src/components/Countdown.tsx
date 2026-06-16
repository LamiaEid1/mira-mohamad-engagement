import { useEffect, useState } from "react";
import { WaxSeal } from "./Flourish";

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return null;
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ target }: { target: Date }) {
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!t) {
    return (
      <p className="text-center font-script text-4xl text-[var(--gold-deep)] sm:text-5xl">
        Today is the day! <span className="align-middle">🤍</span>
      </p>
    );
  }

  const items: [number, string][] = [
    [t.days, "Days"],
    [t.hours, "Hours"],
    [t.minutes, "Minutes"],
    [t.seconds, "Seconds"],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {items.map(([n, label]) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="relative">
            <WaxSeal letters={String(n).padStart(2, "0")} size={88} />
          </div>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gold-deep)] sm:text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
