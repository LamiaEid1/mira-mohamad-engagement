import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding-config";
import { Divider, PageFrame } from "@/components/Flourish";
import { Reveal } from "@/components/Reveal";
import { ContinueLink } from "@/components/ContinueLink";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Meeral & Mohammed" },
      { name: "description", content: "Moments captured along the way." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const photos = wedding.gallery;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? null : (a + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? null : (a - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, photos.length]);

  return (
    <PageFrame>
      <Reveal>
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter Three</p>
          <h1 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">Moments</h1>
          <Divider className="mt-6" />
        </header>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {photos.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 100}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-sm shadow-[0_15px_40px_-20px_rgba(58,42,20,0.4)]"
            >
              <img
                src={src}
                alt={`Moment ${i + 1}`}
                loading="lazy"
                className="block aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-[var(--gold)]/0 transition-colors duration-500 group-hover:bg-[var(--gold)]/20" />
              <span className="pointer-events-none absolute inset-2 border border-[var(--ivory)]/0 transition-colors duration-500 group-hover:border-[var(--ivory)]/70" />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--ink)]/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)]"
          >
            ✕
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)] sm:left-8"
          >
            ‹
          </button>
          <img
            key={photos[active]}
            src={photos[active]}
            alt="Enlarged moment"
            className="animate-fade-rise max-h-[85vh] max-w-[90vw] rounded-sm object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)] sm:right-8"
          >
            ›
          </button>
        </div>
      )}

      <ContinueLink to="/rsvp" label="RSVP" />
    </PageFrame>
  );
}
