import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { wedding } from "@/lib/wedding-config";
import { Countdown } from "@/components/Countdown";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Reveal } from "@/components/Reveal";
import { Divider, WaxSeal } from "@/components/Flourish";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${wedding.brideEn} & ${wedding.groomEn} — You're Invited` },
      { name: "description", content: "An invitation to the wedding of Miral and Mohammed." },
      { property: "og:title", content: `${wedding.brideEn} & ${wedding.groomEn} — You're Invited` },
      { property: "og:description", content: "An invitation to the wedding of Miral and Mohammed." },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Home,
});

type Stage = "closed" | "opening" | "revealed";

const rsvpSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  attending: z.enum(["yes", "no"], { required_error: "Let us know if you can join" }),
  guests: z.coerce.number().int().min(1).max(8),
  dietary: z.string().max(300).optional(),
  message: z.string().max(500).optional(),
});
type RsvpForm = z.infer<typeof rsvpSchema>;

function pad(n: number) { return String(n).padStart(2, "0"); }
function toICS(d: Date) {
  return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + "T" +
    pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + "Z";
}
function downloadICS() {
  const start = wedding.date;
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0",
    "PRODID:-//Meeral & Mohammed//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:wedding-${start.getTime()}@meeral-mohammed`,
    `DTSTAMP:${toICS(new Date())}`,
    `DTSTART:${toICS(start)}`, `DTEND:${toICS(end)}`,
    "SUMMARY:Meeral & Mohammed — Wedding",
    `LOCATION:${wedding.ceremony.venue}, ${wedding.ceremony.address}`,
    "DESCRIPTION:With joy in our hearts, we invite you to celebrate.",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meeral-mohammed-wedding.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function Home() {
  const [stage, setStage] = useState<Stage>("closed");
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [active, setActive] = useState<number | null>(null);
  const photos = wedding.gallery;

  const [rsvpSent, setRsvpSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RsvpForm>({
    defaultValues: { guests: 1, attending: "yes" },
  });

  const open = () => {
    if (stage !== "closed") return;
    audioRef.current?.play().catch(() => {});
    setStage("opening");
  };

  useEffect(() => {
    if (stage !== "opening") return;
    let timer: ReturnType<typeof setTimeout>;
    const v = videoRef.current;
    if (!v) {
      timer = setTimeout(() => setStage("revealed"), 500);
      return () => clearTimeout(timer);
    }
    v.currentTime = 0;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { timer = setTimeout(() => setStage("revealed"), 500); });
    }
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? null : (a + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? null : (a - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, photos.length]);

  const onSubmit = async (data: RsvpForm) => {
    const parsed = rsvpSchema.safeParse(data);
    if (!parsed.success) return;
    await new Promise((r) => setTimeout(r, 600));
    console.log("RSVP", parsed.data);
    setRsvpSent(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/Perfect.MP3" loop preload="auto" />
      <FloatingHearts count={10} />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100svh] items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-2xl">
          {stage !== "revealed" && (
            <button
              onClick={open}
              className="group relative block w-full focus:outline-none"
              aria-label="Tap to open invitation"
            >
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(58,42,20,0.5)]">
                {/* Video always in DOM so it preloads; shown only during opening */}
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setStage("revealed")}
                  onError={() => setStage("revealed")}
                  className={`block w-full ${stage === "opening" ? "" : "hidden"}`}
                >
                  <source src={wedding.envelopeVideoMp4} type="video/mp4" />
                  <source src={wedding.envelopeVideo} type="video/quicktime" />
                </video>

                {stage === "closed" && (
                  imgError ? (
                    <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-4 bg-cream text-gold-deep">
                      <svg viewBox="0 0 80 60" className="w-32 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="10" width="76" height="48" rx="3" />
                        <path d="M2 10 L40 38 L78 10" />
                      </svg>
                      <span className="font-script text-2xl">{wedding.monogram}</span>
                    </div>
                  ) : (
                    <img
                      src={wedding.envelopeImage}
                      alt="A sealed wedding envelope"
                      className="block w-full"
                      onError={() => setImgError(true)}
                    />
                  )
                )}
              </div>
            </button>
          )}

          {stage === "revealed" && (
            <div className="animate-fade-rise flex flex-col items-center gap-10 py-6">
              <p className="font-script text-3xl text-[var(--gold-deep)]">You're invited</p>
              <h1 className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center font-script text-5xl text-[var(--gold-deep)] sm:text-6xl">
                <span>{wedding.brideEn}</span>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--gold)]" fill="currentColor" aria-hidden>
                  <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
                <span>{wedding.groomEn}</span>
              </h1>
              <Divider />
              <p className="text-center text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">
                10 July 2026 · Muscat
              </p>
              <Countdown target={wedding.date} />
            </div>
          )}
        </div>
      </section>
   

      {stage === "revealed" && (
        <>
          {/* ── WELCOME ── */}
          <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-12">
            <Reveal>
              <p className="font-script text-4xl text-[var(--gold-deep)]">A note to you</p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--ink)] sm:text-xl">
                {wedding.welcome}
              </p>
            </Reveal>
          </section>
          <Divider />


          {/* ── GALLERY ── */}
          <section className="mx-auto max-w-5xl px-6 py-20 sm:px-12">
            <Reveal>
              <header className="text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter Three</p>
                <h2 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">Moments</h2>
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
          </section>

          {active !== null && (
            <div
              className="fixed inset-0 z-[100] grid place-items-center bg-[var(--ink)]/85 p-4 backdrop-blur-sm"
              onClick={() => setActive(null)}
            >
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)]"
              >✕</button>
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
                className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)] sm:left-8"
              >‹</button>
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
              >›</button>
            </div>
          )}

          <Divider />

          {/* ── RSVP ── */}
          <section className="mx-auto max-w-3xl px-6 py-20 sm:px-12">
            {rsvpSent ? (
              <div className="flex flex-col items-center gap-8 py-16 text-center">
                <div className="animate-fade-rise">
                  <WaxSeal letters="M&M" size={160} />
                </div>
                <Reveal delay={300}>
                  <p className="font-script text-5xl text-[var(--gold-deep)]">Sealed with love.</p>
                  <p className="mt-4 text-lg text-[var(--ink)]/80">
                    Thank you. Your response has been received — we cannot wait to share the day with you.
                  </p>
                  <Divider className="mt-8" />
                </Reveal>
              </div>
            ) : (
              <>
                <Reveal>
                  <header className="text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter Four</p>
                    <h2 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">Kindly Reply</h2>
                    <Divider className="mt-6" />

                  </header>
                </Reveal>
                <Reveal delay={150}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto mt-16 grid max-w-xl gap-8 text-left"
                    noValidate
                  >
                    <Field label="Full Name" error={errors.name?.message}>
                      <input
                        type="text"
                        autoComplete="name"
                        className="gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
                        placeholder="Your full name"
                        {...register("name")}
                      />
                    </Field>
                    <Field label="Will You Attend?" error={errors.attending?.message}>
                      <div className="flex gap-8 pt-2">
                        {(["yes", "no"] as const).map((v) => (
                          <label key={v} className="flex cursor-pointer items-center gap-3 text-[var(--ink)]">
                            <input type="radio" value={v} {...register("attending")} className="peer sr-only" />
                            <span className="grid h-5 w-5 place-items-center rounded-full border border-[var(--gold-deep)] peer-checked:bg-[var(--gold-deep)]">
                              <span className="h-2 w-2 rounded-full bg-[var(--ivory)] opacity-0 peer-checked:opacity-100" />
                            </span>
                            <span className="text-lg italic">
                              {v === "yes" ? "Joyfully accepts" : "Regretfully declines"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </Field>
                    <Field label="Number of Guests" error={errors.guests?.message}>
                      <input
                        type="number"
                        min={1}
                        max={8}
                        className="gold-underline w-full text-lg text-[var(--ink)]"
                        {...register("guests")}
                      />
                    </Field>
                    <Field label="Dietary Notes" error={errors.dietary?.message}>
                      <input
                        type="text"
                        className="gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
                        placeholder="Allergies, preferences (optional)"
                        {...register("dietary")}
                      />
                    </Field>
                    <Field label="A Note to the Couple" error={errors.message?.message}>
                      <textarea
                        rows={4}
                        className="gold-underline w-full resize-none text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40"
                        placeholder="A wish, a memory, anything you'd like to share..."
                        {...register("message")}
                      />
                    </Field>
                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center gap-4 border-y border-[var(--gold-deep)] px-10 py-4 text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)] transition-colors hover:bg-[var(--gold-deep)] hover:text-[var(--ivory)] disabled:opacity-50"
                      >
                        <span className="h-px w-6 bg-current" />
                        {isSubmitting ? "Sending" : "Send Reply"}
                        <span className="h-px w-6 bg-current" />
                      </button>
                    </div>
                  </form>
                </Reveal>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

function EventCard({
  event,
  monogram,
}: {
  event: { title: string; date: string; time: string; venue: string; address: string };
  monogram: string;
}) {
  return (
    <div className="gold-frame relative bg-[var(--card)] p-8 text-center sm:p-12">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <WaxSeal letters={monogram} size={72} />
      </div>
      <h3 className="mt-6 font-script text-4xl text-[var(--gold-deep)]">{event.title}</h3>
      <Divider className="mt-4" />
      <dl className="mt-6 space-y-4 text-[var(--ink)]">
        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]">When</dt>
          <dd className="mt-1 text-lg">{event.date}</dd>
          <dd className="font-serif text-2xl italic">{event.time}</dd>
        </div>
        <div>
          <dt className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]">Where</dt>
          <dd className="mt-1 text-lg">{event.venue}</dd>
          <dd className="text-sm text-[var(--ink)]/70">{event.address}</dd>
        </div>
      </dl>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-xs italic text-red-700">{error}</span>}
    </label>
  );
}
