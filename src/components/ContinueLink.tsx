import { Link } from "@tanstack/react-router";
import { Divider } from "./Flourish";

export function ContinueLink({
  to,
  label,
}: { to: "/our-story" | "/details" | "/gallery" | "/rsvp" | "/"; label: string }) {
  return (
    <div className="mt-16 flex flex-col items-center gap-6">
      <Divider />
      <Link
        to={to}
        className="group inline-flex flex-col items-center gap-2 text-[var(--gold-deep)]"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.4em]">Continue</span>
        <span className="font-script text-3xl transition-transform group-hover:translate-x-1">
          {label} →
        </span>
      </Link>
    </div>
  );
}
