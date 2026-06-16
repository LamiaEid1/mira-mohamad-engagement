import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding-config";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/details", label: "Details" },
  { to: "/gallery", label: "Gallery" },
  { to: "/rsvp", label: "RSVP" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(248,241,225,0.92)] backdrop-blur-md shadow-[0_1px_0_0_var(--gold)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-3 text-gold">
          <span
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)] font-script text-xl text-[var(--gold-deep)]"
          >
            {wedding.monogram.replace("&", "·")}
          </span>
          <span className="hidden text-sm uppercase tracking-[0.35em] text-[var(--gold-deep)] sm:block">
            {wedding.brideEn} &amp; {wedding.groomEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-sm uppercase tracking-[0.25em] text-[var(--ink)] transition-colors hover:text-[var(--gold-deep)]"
              activeProps={{ className: "text-[var(--gold-deep)]" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--gold-deep)] transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)] text-[var(--gold-deep)] md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[rgba(248,241,225,0.98)] backdrop-blur md:hidden ${
          open ? "max-h-96 border-t border-[var(--gold)]" : "max-h-0"
        } transition-[max-height] duration-500`}
      >
        <nav className="flex flex-col items-center gap-5 py-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.3em] text-[var(--ink)]"
              activeProps={{ className: "text-[var(--gold-deep)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
