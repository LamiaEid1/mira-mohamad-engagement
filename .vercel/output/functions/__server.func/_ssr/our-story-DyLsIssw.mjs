import { t as wedding } from "./wedding-config-BbIpSsAt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageFrame, r as Reveal, t as Divider } from "./Reveal-MPuXzcos.mjs";
import { t as ContinueLink } from "./ContinueLink-4NiwrMt5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-story-DyLsIssw.js
var import_jsx_runtime = require_jsx_runtime();
function OurStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
					children: "Chapter One"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
					children: "Our Story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" })
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mx-auto mt-20 max-w-4xl",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueLink, {
			to: "/details",
			label: "The Details"
		})
	] });
}
//#endregion
export { OurStory as component };
