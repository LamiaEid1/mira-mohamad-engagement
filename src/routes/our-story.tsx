import { createFileRoute } from "@tanstack/react-router";
import { wedding } from "@/lib/wedding-config";
import { Divider, PageFrame } from "@/components/Flourish";
import { Reveal } from "@/components/Reveal";
import { ContinueLink } from "@/components/ContinueLink";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Meeral & Mohammed" },
      { name: "description", content: "How we met, the question, and the road to forever." },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <PageFrame>
      <Reveal>
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]">Chapter One</p>
          <h1 className="mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl">Our Story</h1>
          <Divider className="mt-6" />
        </header>
      </Reveal>

      <ol className="relative mx-auto mt-20 max-w-4xl">
        <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:block" />
        {wedding.story.map((m, i) => {
          const right = i % 2 === 1;
          return (
            <li key={m.year} className="relative mb-20 md:mb-28">
              <Reveal delay={i * 100}>
                <div className={`grid items-center gap-8 md:grid-cols-2 ${right ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-sm shadow-[0_20px_60px_-20px_rgba(58,42,20,0.4)]">
                    <img src={m.photo} alt={m.title} loading="lazy" className="block aspect-[4/5] w-full object-cover" />
                  </div>
                  <div className={`text-center md:text-${right ? "right" : "left"}`}>
                    <span className="font-script text-3xl text-[var(--gold-deep)]">{m.year}</span>
                    <h2 className="mt-2 font-serif text-3xl text-[var(--ink)] sm:text-4xl">{m.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]/85">{m.body}</p>
                  </div>
                </div>
              </Reveal>
              {i < wedding.story.length - 1 && <Divider className="mt-16" />}
            </li>
          );
        })}
      </ol>

      <ContinueLink to="/details" label="The Details" />
    </PageFrame>
  );
}
