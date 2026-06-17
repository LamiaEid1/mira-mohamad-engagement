import { t as wedding } from "./wedding-config-BbIpSsAt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as WaxSeal, n as PageFrame, r as Reveal, t as Divider } from "./Reveal-MPuXzcos.mjs";
import { t as ContinueLink } from "./ContinueLink-4NiwrMt5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/details-BPal83xR.js
var import_jsx_runtime = require_jsx_runtime();
function pad(n) {
	return String(n).padStart(2, "0");
}
function toICS(d) {
	return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + "Z";
}
function downloadICS() {
	const start = wedding.date;
	const end = new Date(start.getTime() + 300 * 60 * 1e3);
	const ics = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Meeral & Mohammed//Wedding//EN",
		"BEGIN:VEVENT",
		`UID:wedding-${start.getTime()}@meeral-mohammed`,
		`DTSTAMP:${toICS(/* @__PURE__ */ new Date())}`,
		`DTSTART:${toICS(start)}`,
		`DTEND:${toICS(end)}`,
		"SUMMARY:Meeral & Mohammed — Wedding",
		`LOCATION:${wedding.ceremony.venue}, ${wedding.ceremony.address}`,
		"DESCRIPTION:With joy in our hearts, we invite you to celebrate.",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const blob = new Blob([ics], { type: "text/calendar" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "meeral-mohammed-wedding.ics";
	a.click();
	URL.revokeObjectURL(url);
}
function EventCard({ event, monogram }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gold-frame relative bg-[var(--card)] p-8 text-center sm:p-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-10 left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaxSeal, {
					letters: monogram,
					size: 72
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-script text-4xl text-[var(--gold-deep)]",
				children: event.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-4 text-[var(--ink)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]",
						children: "When"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-lg",
						children: event.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-serif text-2xl italic",
						children: event.time
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]",
						children: "Where"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-lg",
						children: event.venue
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-sm text-[var(--ink)]/70",
						children: event.address
					})
				] })]
			})
		]
	});
}
function Details() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
					children: "Chapter Two"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
					children: "The Details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" })
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-24 grid gap-16 sm:gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
				event: wedding.ceremony,
				monogram: "M"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
					event: wedding.reception,
					monogram: "M"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
				children: "Dress Code"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-serif text-2xl italic text-[var(--ink)]",
				children: wedding.dressCode
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-20" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-script text-4xl text-[var(--gold-deep)]",
					children: "Find Your Way"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm uppercase tracking-[0.3em] text-[var(--ink)]/70",
					children: wedding.ceremony.venue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 max-w-3xl overflow-hidden rounded-sm border border-[var(--gold)] shadow-[0_20px_50px_-20px_rgba(58,42,20,0.3)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: wedding.mapEmbed,
						title: "Venue map",
						className: "block h-[380px] w-full",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: downloadICS,
					className: "mt-10 inline-flex items-center gap-3 border-y border-[var(--gold-deep)] px-8 py-3 text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)] transition-colors hover:bg-[var(--gold-deep)] hover:text-[var(--ivory)]",
					children: "✦ Add to Calendar ✦"
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueLink, {
			to: "/gallery",
			label: "The Gallery"
		})
	] });
}
//#endregion
export { Details as component };
