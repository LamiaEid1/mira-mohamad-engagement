import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as WaxSeal, n as PageFrame, r as Reveal, t as Divider } from "./Reveal-MPuXzcos.mjs";
import { t as ContinueLink } from "./ContinueLink-4NiwrMt5.mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rsvp-CznpN85a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(80),
	attending: enumType(["yes", "no"], { required_error: "Let us know if you can join" }),
	guests: coerce.number().int().min(1).max(8),
	dietary: stringType().max(300).optional(),
	message: stringType().max(500).optional()
});
function Rsvp() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues: {
		guests: 1,
		attending: "yes"
	} });
	const onSubmit = async (data) => {
		const parsed = schema.safeParse(data);
		if (!parsed.success) return;
		await new Promise((r) => setTimeout(r, 600));
		console.log("RSVP", parsed.data);
		setSent(true);
	};
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-xl flex-col items-center gap-8 py-16 text-center",
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
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-[var(--gold-deep)]",
					children: "Chapter Four"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-script text-6xl text-[var(--gold-deep)] sm:text-7xl",
					children: "Kindly Reply"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { className: "mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-lg text-[var(--ink)]/80",
					children: "Please respond by the first of November so we may prepare a place for you."
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueLink, {
			to: "/",
			label: "Back to the Beginning"
		})
	] });
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
export { Rsvp as component };
