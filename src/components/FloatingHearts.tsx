export function FloatingHearts({ count = 9 }: { count?: number }) {
  const hearts = Array.from({ length: count });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {hearts.map((_, i) => {
        const left = (i * 97) % 100;
        const dur = 18 + ((i * 7) % 16);
        const delay = (i * 3) % 20;
        const size = 10 + ((i * 5) % 16);
        return (
          <svg
            key={i}
            className="heart-float absolute text-[var(--gold)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.35,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        );
      })}
    </div>
  );
}
