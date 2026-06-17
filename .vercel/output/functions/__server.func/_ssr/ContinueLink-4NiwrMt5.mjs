import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Divider } from "./Reveal-MPuXzcos.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContinueLink-4NiwrMt5.js
var import_jsx_runtime = require_jsx_runtime();
function ContinueLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16 flex flex-col items-center gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: "group inline-flex flex-col items-center gap-2 text-[var(--gold-deep)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.7rem] uppercase tracking-[0.4em]",
				children: "Continue"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-script text-3xl transition-transform group-hover:translate-x-1",
				children: [label, " →"]
			})]
		})]
	});
}
//#endregion
export { ContinueLink as t };
