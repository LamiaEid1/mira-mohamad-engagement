import { createFileRoute } from "@tanstack/react-router";
import { wedding } from "@/lib/wedding-config";
import { Divider, PageFrame, WaxSeal } from "@/components/Flourish";
import { Reveal } from "@/components/Reveal";
import { ContinueLink } from "@/components/ContinueLink";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "Event Details — Meeral & Mohammed" },
      { name: "description", content: "Ceremony, reception, venue and dress code details." },
    ],
  }),
  component: Details,
});

function pad(n: number) { return String(n).padStart(2, "0"); }
function toICS(d: Date) {
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) + "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) + "Z"
  );
}

function downloadICS() {
  const start = wedding.date;
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Meeral & Mohammed//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:wedding-${start.getTime()}@meeral-mohammed`,
    `DTSTAMP:${toICS(new Date())}`,
    `DTSTART:${toICS(start)}`,
    `DTEND:${toICS(end)}`,
    "SUMMARY:Meeral & Mohammed — Wedding",
    `LOCATION:${wedding.ceremony.venue}, ${wedding.ceremony.address}`,
    "DESCRIPTION:With joy in our hearts, we invite you to celebrate.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meeral-mohammed-wedding.ics";
  a.click();
  URL.revokeObjectURL(url);
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
      <h2 className="mt-6 font-script text-4xl text-[var(--gold-deep)]">{event.title}</h2>
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

function Details() {
  return (
    <PageFrame>
      <Reveal>
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter Two</p>
          <h1 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">The Details</h1>
          <Divider className="mt-6" />
        </header>
      </Reveal>

      <div className="mt-24 grid gap-16 sm:gap-10 md:grid-cols-2">
        <Reveal><EventCard event={wedding.ceremony} monogram="M" /></Reveal>
        <Reveal delay={120}><EventCard event={wedding.reception} monogram="M" /></Reveal>
      </div>

      <Divider className="mt-20" />

      <Reveal>
        <div className="mt-12 text-center">
          <h2 className="font-script text-4xl text-[var(--gold-deep)]">Find Your Way</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[var(--ink)]/70">{wedding.ceremony.venue}</p>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-sm border border-[var(--gold)] shadow-[0_20px_50px_-20px_rgba(58,42,20,0.3)]">
            <iframe
              src={wedding.mapEmbed}
              title="Venue map"
              className="block h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <button
            onClick={downloadICS}
            className="mt-10 inline-flex items-center gap-3 border-y border-[var(--gold-deep)] px-8 py-3 text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)] transition-colors hover:bg-[var(--gold-deep)] hover:text-[var(--ivory)]"
          >
            ✦ Add to Calendar ✦
          </button>
        </div>
      </Reveal>

      <ContinueLink to="/gallery" label="The Gallery" />
    </PageFrame>
  );
}
