import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { wedding } from "@/lib/wedding-config";
import { Countdown } from "@/components/Countdown";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Reveal } from "@/components/Reveal";
import { Divider, PageFrame } from "@/components/Flourish";
import { ContinueLink } from "@/components/ContinueLink";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${wedding.brideEn} & ${wedding.groomEn} — You're Invited` },
      { name: "description", content: "An invitation to the wedding of Meeral and Mohammed." },
    ],
  }),
  component: Home,
});

type Stage = "closed" | "opening" | "revealed";

function Home() {
  const [stage, setStage] = useState<Stage>("closed");
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    if (stage !== "closed") return;
    setStage("opening");
  };

  useEffect(() => {
    if (stage === "opening" && videoRef.current) {
      const v = videoRef.current;
      v.currentTime = 0;
      v.play().catch(() => setStage("revealed"));
    }
  }, [stage]);

  return (
    <>
      <FloatingHearts count={10} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-2xl">
          {stage !== "revealed" && (
            <button
              onClick={open}
              className="group relative block w-full focus:outline-none"
              aria-label="Tap to open invitation"
            >
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(58,42,20,0.5)]">
                {stage === "closed" ? (
                  <img
                    src={wedding.envelopeImage}
                    alt="A sealed wedding envelope"
                    className="block w-full"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={wedding.envelopeVideo}
                    muted
                    playsInline
                    preload="auto"
                    onEnded={() => setStage("revealed")}
                    onError={() => setStage("revealed")}
                    className="block w-full"
                  />
                )}
              </div>
              {stage === "closed" && (
                <span className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-seal rounded-full bg-[var(--ink)]/70 px-6 py-3 text-[0.65rem] uppercase tracking-[0.45em] text-[var(--ivory)] backdrop-blur">
                  Tap to Open
                </span>
              )}
            </button>
          )}

          {stage === "revealed" && (
            <div className="animate-fade-rise flex flex-col items-center gap-10 py-6">
              <p className="font-script text-3xl text-[var(--gold-deep)]">You're invited</p>

              <h1 className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center font-arabic text-5xl text-[var(--gold-deep)] sm:text-6xl">
                <span>{wedding.brideAr}</span>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--gold)]" fill="currentColor" aria-hidden>
                  <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
                <span>{wedding.groomAr}</span>
              </h1>

              <div className="flex items-center gap-5 text-[var(--ink)]">
                <span className="font-serif text-3xl italic sm:text-4xl">{wedding.brideEn}</span>
                <span className="font-script text-2xl text-[var(--gold-deep)]">&</span>
                <span className="font-serif text-3xl italic sm:text-4xl">{wedding.groomEn}</span>
              </div>

              <Divider />

              <Countdown target={wedding.date} />

              <p className="text-center text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">
                12 December 2026 · Muscat
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WELCOME */}
      {stage === "revealed" && (
        <PageFrame>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-script text-4xl text-[var(--gold-deep)]">A note to you</p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--ink)] sm:text-xl">
                {wedding.welcome}
              </p>
              <ContinueLink to="/our-story" label="Our Story" />
            </div>
          </Reveal>
        </PageFrame>
      )}
    </>
  );
}
