import { r as __toESM } from "../_runtime.mjs";
import { t as wedding } from "./wedding-config-BbIpSsAt.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as WaxSeal, r as Reveal, t as Divider } from "./Reveal-MPuXzcos.mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2aBzPUY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function diff(target) {
	const ms = target.getTime() - Date.now();
	if (ms <= 0) return null;
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms % 864e5 / 36e5),
		minutes: Math.floor(ms % 36e5 / 6e4),
		seconds: Math.floor(ms % 6e4 / 1e3)
	};
}
function Countdown({ target }) {
	const [t, setT] = (0, import_react.useState)(() => diff(target));
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setT(diff(target)), 1e3);
		return () => clearInterval(id);
	}, [target]);
	if (!t) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-center font-script text-4xl text-[var(--gold-deep)] sm:text-5xl",
		children: ["Today is the day! ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "align-middle",
			children: "🤍"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-3 sm:gap-6",
		children: [
			[t.days, "Days"],
			[t.hours, "Hours"],
			[t.minutes, "Minutes"],
			[t.seconds, "Seconds"]
		].map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaxSeal, {
					letters: String(n).padStart(2, "0"),
					size: 88
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gold-deep)] sm:text-xs",
				children: label
			})]
		}, label))
	});
}
function FloatingHearts({ count = 9 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": true,
		children: Array.from({ length: count }).map((_, i) => {
			const left = i * 97 % 100;
			const dur = 18 + i * 7 % 16;
			const delay = i * 3 % 20;
			const size = 10 + i * 5 % 16;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "heart-float absolute text-[var(--gold)]",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				style: {
					left: `${left}%`,
					width: size,
					height: size,
					opacity: .35,
					animationDuration: `${dur}s`,
					animationDelay: `${delay}s`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z" })
			}, i);
		})
	});
}
var rsvpSchema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(80),
	attending: enumType(["yes", "no"], { required_error: "Let us know if you can join" }),
	guests: coerce.number().int().min(1).max(8),
	dietary: stringType().max(300).optional(),
	message: stringType().max(500).optional()
});
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
function Home() {
	const [stage, setStage] = (0, import_react.useState)("closed");
	const [imgError, setImgError] = (0, import_react.useState)(false);
	const videoRef = (0, import_react.useRef)(null);
	const audioRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(null);
	const photos = wedding.gallery;
	const [rsvpSent, setRsvpSent] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues: {
		guests: 1,
		attending: "yes"
	} });
	const open = () => {
		if (stage !== "closed") return;
		audioRef.current?.play().catch(() => {});
		setStage("opening");
	};
	(0, import_react.useEffect)(() => {
		if (stage !== "opening") return;
		let timer;
		const v = videoRef.current;
		if (!v) {
			timer = setTimeout(() => setStage("revealed"), 500);
			return () => clearTimeout(timer);
		}
		v.currentTime = 0;
		v.play().catch(() => {
			timer = setTimeout(() => setStage("revealed"), 500);
		});
		return () => clearTimeout(timer);
	}, [stage]);
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setActive(null);
			if (e.key === "ArrowRight") setActive((a) => a === null ? null : (a + 1) % photos.length);
			if (e.key === "ArrowLeft") setActive((a) => a === null ? null : (a - 1 + photos.length) % photos.length);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [active, photos.length]);
	const onSubmit = async (data) => {
		const parsed = rsvpSchema.safeParse(data);
		if (!parsed.success) return;
		await new Promise((r) => setTimeout(r, 600));
		console.log("RSVP", parsed.data);
		setRsvpSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: "/Perfect.MP3",
			loop: true,
			preload: "auto"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingHearts, { count: 10 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative flex min-h-[100svh] items-center justify-center px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-2xl",
				children: [stage !== "revealed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: open,
					className: "group relative block w-full focus:outline-none",
					"aria-label": "Tap to open invitation",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(58,42,20,0.5)]",
						children: stage === "closed" ? imgError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex aspect-4/3 w-full flex-col items-center justify-center gap-4 bg-cream text-gold-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 80 60",
								className: "w-32 opacity-60",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "2",
									y: "10",
									width: "76",
									height: "48",
									rx: "3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 10 L40 38 L78 10" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-script text-2xl",
								children: wedding.monogram
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: wedding.envelopeImage,
							alt: "A sealed wedding envelope",
							className: "block w-full",
							onError: () => setImgError(true)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							ref: videoRef,
							src: wedding.envelopeVideo,
							muted: true,
							playsInline: true,
							preload: "auto",
							onEnded: () => setStage("revealed"),
							onError: () => setStage("revealed"),
							className: "block w-full"
						})
					}), stage === "closed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-seal rounded-full bg-(--ink)/70 px-6 py-3 text-[0.65rem] uppercase tracking-[0.45em] text-ivory backdrop-blur",
						children: "Tap to Open"
					})]
				}), stage === "revealed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-rise flex flex-col items-center gap-10 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold-deep)]",
							children: "You're invited"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center font-arabic text-5xl text-[var(--gold-deep)] sm:text-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: wedding.brideAr }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-8 w-8 text-[var(--gold)]",
									fill: "currentColor",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9z" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: wedding.groomAr })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { target: wedding.date }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
							children: "12 December 2026 · Muscat"
						})
					]
				})]
			})
		}),
		stage === "revealed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-3xl px-6 py-20 text-center sm:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-4xl text-[var(--gold-deep)]",
					children: "A note to you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed text-[var(--ink)] sm:text-xl",
					children: wedding.welcome
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full overflow-hidden shadow-[0_20px_60px_-20px_rgba(58,42,20,0.35)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: wedding.kidsImage,
					alt: "These kids are getting engaged",
					className: "block w-full object-cover"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-6 py-20 sm:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
							children: "Chapter One"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "relative mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:block" }), wedding.story.map((m, i) => {
						const right = i % 2 === 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative mb-20 md:mb-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `grid items-center gap-8 md:grid-cols-2 ${right ? "md:[&>*:first-child]:order-2" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-sm shadow-[0_20px_60px_-20px_rgba(58,42,20,0.4)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: m.photo,
											alt: m.title,
											loading: "lazy",
											className: "block aspect-[4/5] w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `text-center md:text-${right ? "right" : "left"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-script text-3xl text-[var(--gold-deep)]",
												children: m.year
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-serif text-3xl text-[var(--ink)] sm:text-4xl",
												children: m.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-lg leading-relaxed text-[var(--ink)]/85",
												children: m.body
											})
										]
									})]
								})
							}), i < wedding.story.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-16" })]
						}, m.year);
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-6 py-20 sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
								children: "Chapter Two"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-6 py-20 sm:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
							children: "Chapter Three"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
							children: "Moments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5",
					children: photos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(i),
							className: "group relative block w-full overflow-hidden rounded-sm shadow-[0_15px_40px_-20px_rgba(58,42,20,0.4)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: `Moment ${i + 1}`,
									loading: "lazy",
									className: "block aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 bg-[var(--gold)]/0 transition-colors duration-500 group-hover:bg-[var(--gold)]/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-2 border border-[var(--ivory)]/0 transition-colors duration-500 group-hover:border-[var(--ivory)]/70" })
							]
						})
					}, src))
				})]
			}),
			active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] grid place-items-center bg-[var(--ink)]/85 p-4 backdrop-blur-sm",
				onClick: () => setActive(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close",
						onClick: () => setActive(null),
						className: "absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)]",
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Previous",
						onClick: (e) => {
							e.stopPropagation();
							setActive((active - 1 + photos.length) % photos.length);
						},
						className: "absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)] sm:left-8",
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos[active],
						alt: "Enlarged moment",
						className: "animate-fade-rise max-h-[85vh] max-w-[90vw] rounded-sm object-contain shadow-2xl",
						onClick: (e) => e.stopPropagation()
					}, photos[active]),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Next",
						onClick: (e) => {
							e.stopPropagation();
							setActive((active + 1) % photos.length);
						},
						className: "absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)] text-[var(--ivory)] sm:right-8",
						children: "›"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-3xl px-6 py-20 sm:px-12",
				children: rsvpSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-8 py-16 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-fade-rise",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaxSeal, {
							letters: "M&M",
							size: 160
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 300,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-5xl text-[var(--gold-deep)]",
								children: "Sealed with love."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-[var(--ink)]/80",
								children: "Thank you. Your response has been received — we cannot wait to share the day with you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-8" })
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
							children: "Chapter Four"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
							children: "Kindly Reply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-lg text-[var(--ink)]/80",
							children: "Please respond by the first of November so we may prepare a place for you."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						className: "mx-auto mt-16 grid max-w-xl gap-8 text-left",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full Name",
								error: errors.name?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									autoComplete: "name",
									className: "gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40",
									placeholder: "Your full name",
									...register("name")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Will You Attend?",
								error: errors.attending?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-8 pt-2",
									children: ["yes", "no"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-center gap-3 text-[var(--ink)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "radio",
												value: v,
												...register("attending"),
												className: "peer sr-only"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-5 w-5 place-items-center rounded-full border border-[var(--gold-deep)] peer-checked:bg-[var(--gold-deep)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[var(--ivory)] opacity-0 peer-checked:opacity-100" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg italic",
												children: v === "yes" ? "Joyfully accepts" : "Regretfully declines"
											})
										]
									}, v))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Number of Guests",
								error: errors.guests?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 8,
									className: "gold-underline w-full text-lg text-[var(--ink)]",
									...register("guests")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dietary Notes",
								error: errors.dietary?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "gold-underline w-full text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40",
									placeholder: "Allergies, preferences (optional)",
									...register("dietary")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "A Note to the Couple",
								error: errors.message?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: "gold-underline w-full resize-none text-lg text-[var(--ink)] placeholder:text-[var(--ink)]/40",
									placeholder: "A wish, a memory, anything you'd like to share...",
									...register("message")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "group inline-flex items-center gap-4 border-y border-[var(--gold-deep)] px-10 py-4 text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)] transition-colors hover:bg-[var(--gold-deep)] hover:text-[var(--ivory)] disabled:opacity-50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-current" }),
										isSubmitting ? "Sending" : "Send Reply",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-current" })
									]
								})
							})
						]
					})
				})] })
			})
		] })
	] });
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.65rem] uppercase tracking-[0.35em] text-[var(--gold-deep)]",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs italic text-red-700",
				children: error
			})
		]
	});
}
//#endregion
export { Home as component };
