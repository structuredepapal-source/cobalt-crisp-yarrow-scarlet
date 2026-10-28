import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0JwcY9ZB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		id: "corner",
		index: "01",
		title: "Corner Block",
		kind: "Commercial",
		state: "Design",
		image: "/work/commercial.jpg",
		alt: "Curved corner commercial building at dusk, with bronze bands and warm interior light",
		focus: "center"
	},
	{
		id: "courtyard",
		index: "02",
		title: "Courtyard",
		kind: "Residence",
		state: "Design",
		image: "/work/courtyard.jpg",
		alt: "Single-storey courtyard house with a circular screen, water, and a planted garden",
		focus: "center"
	},
	{
		id: "garden",
		index: "03",
		title: "Garden Court",
		kind: "Residence",
		state: "Design",
		image: "/work/garden.jpg",
		alt: "House opening onto a lawn, fountain court, and a shaded outdoor room",
		focus: "center"
	},
	{
		id: "dusk",
		index: "04",
		title: "At Dusk",
		kind: "Residence",
		state: "Design",
		image: "/work/dusk.jpg",
		alt: "Stone and timber house at dusk, with mountains behind a wet forecourt",
		focus: "center"
	},
	{
		id: "progress",
		index: "05",
		title: "In Progress",
		kind: "Residence",
		state: "Design",
		image: "/work/progress.jpg",
		alt: "Two-storey house with a car porch, stone screens, and a timber upper floor",
		focus: "center"
	},
	{
		id: "row",
		index: "06",
		title: "The Row",
		kind: "Residences",
		state: "Design",
		image: "/work/row.jpg",
		alt: "A row of houses with stone, timber, and a shared planted front",
		focus: "center"
	},
	{
		id: "site",
		index: "07",
		title: "On Site",
		kind: "Residence",
		state: "Built · Quetta",
		image: "/work/built-facade.jpg",
		alt: "Built house in Quetta with an orange volume, white bands, and a timber gate",
		focus: "center 28%"
	},
	{
		id: "hall",
		index: "08",
		title: "The Hall",
		kind: "Interior",
		state: "Built · Quetta",
		image: "/work/interior.jpg",
		alt: "Built interior with an orange wall, a dark metal screen, and a patterned stone floor",
		focus: "center"
	},
	{
		id: "masjid",
		index: "09",
		title: "Masjid",
		kind: "Religious",
		state: "Design",
		image: "/work/masjid.jpg",
		alt: "Mosque with a tall minaret, blue domes, and a stepped entrance",
		focus: "center"
	}
];
var services = [
	["01", "Architecture"],
	["02", "Interior"],
	["03", "Planning"],
	["04", "Construction"]
];
var phoneDisplay = "0300 2213095";
var phoneHref = "tel:+923002213095";
var whatsappHref = "https://wa.me/923002213095?text=Hello%20HA%2BArchitects%2C%20I%20would%20like%20to%20discuss%20a%20project.";
var mapsHref = "https://www.google.com/maps/search/?api=1&query=Office%205%202nd%20Floor%20Kazi%20Regal%20Chowk%20Main%20Jinnah%20Road%20Quetta";
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("overture");
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const nodes = document.querySelectorAll("[data-chapter]");
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target instanceof HTMLElement && visible.target.dataset.chapter) setActive(visible.target.dataset.chapter);
		}, { threshold: [.45, .6] });
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const height = document.documentElement.scrollHeight - window.innerHeight;
				setProgress(height > 0 ? window.scrollY / height : 0);
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const go = (id) => {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const activeChapter = chapters.find((chapter) => chapter.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink text-foam",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 top-0 z-50 h-0.5 bg-ink-soft",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full origin-left bg-gold",
					style: { transform: `scaleX(${progress})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-4 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#overture",
					className: "flex min-h-11 shrink-0 items-center",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo.png",
						alt: "HA+ARCHITECTS",
						className: "h-14 w-auto max-w-none sm:h-16"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref,
						className: "tap kicker flex min-h-11 items-center px-2 text-gold",
						children: "Inquire"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tap kicker min-h-11 px-2 text-foam",
						"aria-expanded": open,
						"aria-controls": "index",
						onClick: () => setOpen((value) => !value),
						children: open ? "Close" : "Index"
					})]
				})]
			}),
			activeChapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 font-display text-2xl text-gold lg:block",
				children: activeChapter.index
			}) : null,
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				id: "index",
				className: "fixed inset-0 z-40 overflow-y-auto bg-ink px-6 pt-24 pb-16",
				"aria-label": "Index",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-gold",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8",
					children: [chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-foam/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "tap flex w-full items-baseline justify-between gap-4 py-4 text-left",
							onClick: () => go(chapter.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl leading-none",
								children: chapter.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker text-mist",
								children: chapter.index
							})]
						})
					}, chapter.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-foam/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "tap flex w-full items-baseline justify-between gap-4 py-4 text-left",
							onClick: () => go("studio"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl leading-none",
								children: "Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker text-mist",
								children: "Visit"
							})]
						})
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "overture",
					"data-chapter": "overture",
					className: "plate",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col justify-end px-5 pt-28 pb-10 sm:px-10 sm:pb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/logo.png",
								alt: "",
								className: "mb-8 w-52 max-w-full sm:w-64"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-lg leading-snug text-foam sm:text-xl",
								children: "Houses, commercial buildings, interiors, and places of worship. Drawn in Quetta."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mt-8 text-gold",
								children: "Scroll"
							})
						]
					})
				}),
				chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: chapter.id,
					"data-chapter": chapter.id,
					className: "plate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hem",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: chapter.image,
							alt: chapter.alt,
							className: "plate-img",
							style: { objectPosition: chapter.focus },
							draggable: false,
							loading: chapter.index === "01" ? "eager" : "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim absolute inset-x-0 bottom-0 z-10 h-2/5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 z-20 px-5 pt-16 pb-8 sm:px-10 sm:pb-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-gold",
									children: chapter.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-5xl leading-none text-foam sm:text-7xl",
									children: chapter.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "kicker mt-4 text-foam/80",
									children: [
										chapter.kind,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 text-gold",
											children: "·"
										}),
										chapter.state
									]
								})
							]
						})
					]
				}, chapter.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "sign",
					"data-chapter": "sign",
					className: "plate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hem",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/work/sign.jpg",
							alt: "The HA+ARCHITECTS mark mounted on a dark wall",
							className: "plate-img",
							style: { objectPosition: "center" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim absolute inset-x-0 bottom-0 z-10 h-1/3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 z-20 px-5 pb-8 sm:px-10 sm:pb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-gold",
								children: "The mark"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-5xl leading-none sm:text-7xl",
								children: "Hanif Agha"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "studio",
					"data-chapter": "studio",
					className: "studio bg-paper text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hem",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-5 pt-24 pb-20 sm:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-ink-soft",
								children: "The studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display mt-5 text-ink",
								children: [
									"A practice",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"above Regal Chowk."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-xl text-lg leading-relaxed text-ink-soft",
								children: "Hanif Agha leads HA+Architects from Office 5, on the second floor at Regal Chowk. The chapters above are the work. Designs are labelled as designs. Two of them are photographs of buildings already standing in Quetta."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-14 border-t border-line",
								children: services.map(([index, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-6 border-b border-line py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl leading-none",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "kicker text-mist",
										children: index
									})]
								}, name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "mt-16 max-w-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "font-display text-3xl leading-snug text-ink",
									children: "“I am extremely satisfied with the design and work of the architect. He designed my house beautifully.”"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "kicker mt-5 text-mist",
									children: "A client, on Google · 5.0 from 13 reviews"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "visit",
								className: "mt-20 grid gap-12 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
									className: "font-display text-3xl leading-tight text-ink not-italic",
									children: [
										"Office 5, Second Floor",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Kazi, Regal Chowk",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Main Jinnah Road",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Quetta 87300"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg text-ink-soft",
										children: "Open · closes 9 pm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-lg text-ink",
										children: phoneDisplay
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-col gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: whatsappHref,
												className: "tap inline-flex min-h-12 items-center justify-center bg-ink px-5 text-foam",
												children: "WhatsApp the studio"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: phoneHref,
												className: "tap inline-flex min-h-12 items-center justify-center border border-ink px-5 text-ink",
												children: ["Call ", phoneDisplay]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: mapsHref,
												className: "tap inline-flex min-h-12 items-center justify-center border border-ink px-5 text-ink",
												children: "Directions"
											})
										]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mt-20 text-mist",
								children: "HA+Architects · Quetta"
							})
						]
					})]
				})
			] })
		]
	});
}
//#endregion
export { Home as component };
