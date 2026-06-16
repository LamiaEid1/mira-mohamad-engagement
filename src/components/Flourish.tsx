export function CornerFlourish({
  className = "",
  flip = false,
}: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M2 2 L40 2 M2 2 L2 40" strokeWidth="1.5" />
      <path d="M6 6 L36 6 M6 6 L6 36" strokeWidth="0.6" />
      <path d="M14 14 C 30 18, 46 30, 58 50 C 40 42, 24 36, 14 30 Z" fill="currentColor" opacity="0.85" />
      <path d="M22 22 C 38 28, 52 42, 64 62" />
      <path d="M28 18 C 36 26, 40 36, 44 50" />
      <circle cx="48" cy="48" r="1.5" fill="currentColor" />
      <circle cx="56" cy="40" r="1" fill="currentColor" />
      <circle cx="40" cy="56" r="1" fill="currentColor" />
      <path d="M62 14 C 70 16, 76 22, 80 32" />
      <path d="M14 62 C 16 70, 22 76, 32 80" />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <svg viewBox="0 0 60 20" className="h-5 w-16" fill="currentColor" aria-hidden>
        <path d="M30 4 C 24 4, 20 8, 20 12 C 20 16, 24 18, 30 14 C 36 18, 40 16, 40 12 C 40 8, 36 4, 30 4 Z" />
        <circle cx="6" cy="10" r="1.5" />
        <circle cx="54" cy="10" r="1.5" />
        <path d="M10 10 L 16 10 M44 10 L 50 10" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}

export function WaxSeal({
  letters,
  size = 80,
  className = "",
}: { letters: string; size?: number; className?: string }) {
  return (
    <div
      className={`relative inline-grid place-items-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, #e6d29a, #c9a14a 55%, #8a6520 100%)",
        boxShadow:
          "inset -4px -6px 12px rgba(58,42,20,0.35), inset 4px 4px 10px rgba(255,240,200,0.4), 0 4px 14px rgba(58,42,20,0.25)",
        clipPath:
          "polygon(50% 0%, 63% 6%, 75% 3%, 82% 14%, 95% 18%, 96% 32%, 100% 45%, 94% 58%, 99% 72%, 86% 78%, 82% 92%, 68% 90%, 55% 99%, 42% 92%, 28% 96%, 22% 84%, 8% 80%, 6% 66%, 0% 52%, 6% 38%, 2% 24%, 16% 20%, 22% 6%, 36% 10%)",
      }}
    >
      <span
        className="font-script text-[var(--ivory)] drop-shadow"
        style={{ fontSize: size * 0.42, lineHeight: 1 }}
      >
        {letters}
      </span>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute inset-4 border border-[var(--gold)] opacity-60" />
      <div className="pointer-events-none absolute inset-6 border border-[var(--gold)] opacity-30" />
      <div className="pointer-events-none absolute inset-4 text-[var(--gold-deep)]">
        <CornerFlourish className="absolute -top-2 -left-2 h-24 w-24 sm:h-32 sm:w-32" />
        <CornerFlourish className="absolute -top-2 -right-2 h-24 w-24 sm:h-32 sm:w-32" flip />
        <CornerFlourish className="absolute -bottom-2 -left-2 h-24 w-24 sm:h-32 sm:w-32 rotate-[270deg]" />
        <CornerFlourish className="absolute -bottom-2 -right-2 h-24 w-24 sm:h-32 sm:w-32 rotate-180" />
      </div>
      <div className="relative px-2 py-8 sm:px-10 sm:py-14">{children}</div>
    </div>
  );
}
