import { r as __toESM } from "../_runtime.mjs";
import { t as wedding } from "./wedding-config-BbIpSsAt.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-RTUAXgtd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BGFQiq-E.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [display, setDisplay] = (0, import_react.useState)(children);
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [key, setKey] = (0, import_react.useState)(pathname);
	(0, import_react.useEffect)(() => {
		if (key === pathname) {
			setDisplay(children);
			return;
		}
		setVisible(false);
		const t = setTimeout(() => {
			setDisplay(children);
			setKey(pathname);
			setVisible(true);
		}, 250);
		return () => clearTimeout(t);
	}, [
		pathname,
		children,
		key
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(8px)",
			transition: "opacity 0.4s ease, transform 0.4s ease"
		},
		children: display
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-script text-7xl text-[var(--gold-deep)]",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-[var(--ink)]",
					children: "This page could not be found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block border-b border-[var(--gold-deep)] text-[var(--gold-deep)]",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl text-[var(--ink)]",
				children: "Something went wrong"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
					reset();
				},
				className: "mt-6 border-b border-[var(--gold-deep)] text-[var(--gold-deep)]",
				children: "Try again"
			})]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: " Miral & Mohammed — A Wedding Invitation" },
			{
				name: "description",
				content: "Join Miral and Mohammed on December 12, 2026 for an evening of love, light, and gold."
			},
			{
				property: "og:title",
				content: "Miral & Mohammed — A Wedding Invitation"
			},
			{
				property: "og:description",
				content: "Join us on December 12, 2026."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Pinyon+Script&family=Tajawal:wght@500;700;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "min-h-screen",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "py-10 text-center font-script text-2xl text-[var(--gold-deep)]",
			children: ["Meeral · Mohammed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[0.65rem] uppercase tracking-[0.4em]",
				children: "12 . 12 . 2026"
			})]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./rsvp-CznpN85a.mjs");
var Route$4 = createFileRoute("/rsvp")({
	head: () => ({ meta: [{ title: "RSVP — Meeral & Mohammed" }, {
		name: "description",
		content: "Kindly respond by November 1, 2026."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(80),
	attending: enumType(["yes", "no"], { required_error: "Let us know if you can join" }),
	guests: coerce.number().int().min(1).max(8),
	dietary: stringType().max(300).optional(),
	message: stringType().max(500).optional()
});
var $$splitComponentImporter$3 = () => import("./our-story-DyLsIssw.mjs");
var Route$3 = createFileRoute("/our-story")({
	head: () => ({ meta: [{ title: "Our Story — Meeral & Mohammed" }, {
		name: "description",
		content: "How we met, the question, and the road to forever."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-OQjYdEa4.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery — Meeral & Mohammed" }, {
		name: "description",
		content: "Moments captured along the way."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./details-BPal83xR.mjs");
var Route$1 = createFileRoute("/details")({
	head: () => ({ meta: [{ title: "Event Details — Meeral & Mohammed" }, {
		name: "description",
		content: "Ceremony, reception, venue and dress code details."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-C2aBzPUY.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: `${wedding.brideEn} & ${wedding.groomEn} — You're Invited` }, {
		name: "description",
		content: "An invitation to the wedding of Miral and Mohammed."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(80),
	attending: enumType(["yes", "no"], { required_error: "Let us know if you can join" }),
	guests: coerce.number().int().min(1).max(8),
	dietary: stringType().max(300).optional(),
	message: stringType().max(500).optional()
});
var RsvpRoute = Route$4.update({
	id: "/rsvp",
	path: "/rsvp",
	getParentRoute: () => Route$5
});
var OurStoryRoute = Route$3.update({
	id: "/our-story",
	path: "/our-story",
	getParentRoute: () => Route$5
});
var GalleryRoute = Route$2.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$5
});
var DetailsRoute = Route$1.update({
	id: "/details",
	path: "/details",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	DetailsRoute,
	GalleryRoute,
	OurStoryRoute,
	RsvpRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
