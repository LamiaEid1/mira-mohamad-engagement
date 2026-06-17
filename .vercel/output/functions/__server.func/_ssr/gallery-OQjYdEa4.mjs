import { r as __toESM } from "../_runtime.mjs";
import { t as wedding } from "./wedding-config-BbIpSsAt.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageFrame, r as Reveal, t as Divider } from "./Reveal-MPuXzcos.mjs";
import { t as ContinueLink } from "./ContinueLink-4NiwrMt5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-OQjYdEa4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	const photos = wedding.gallery;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
					children: "Chapter Three"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
					children: "Moments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" })
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueLink, {
			to: "/rsvp",
			label: "RSVP"
		})
	] });
}
//#endregion
export { Gallery as component };
