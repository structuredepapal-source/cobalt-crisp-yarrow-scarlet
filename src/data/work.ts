export type Chapter = {
  id: string;
  index: string;
  title: string;
  kind: string;
  state: string;
  image: string;
  alt: string;
  focus: string;
};

export const chapters: Chapter[] = [
  {
    id: "corner",
    index: "01",
    title: "Corner Block",
    kind: "Commercial",
    state: "Design",
    image: "/work/commercial.jpg",
    alt: "Curved corner commercial building at dusk, with bronze bands and warm interior light",
    focus: "center",
  },
  {
    id: "courtyard",
    index: "02",
    title: "Courtyard",
    kind: "Residence",
    state: "Design",
    image: "/work/courtyard.jpg",
    alt: "Single-storey courtyard house with a circular screen, water, and a planted garden",
    focus: "center",
  },
  {
    id: "garden",
    index: "03",
    title: "Garden Court",
    kind: "Residence",
    state: "Design",
    image: "/work/garden.jpg",
    alt: "House opening onto a lawn, fountain court, and a shaded outdoor room",
    focus: "center",
  },
  {
    id: "dusk",
    index: "04",
    title: "At Dusk",
    kind: "Residence",
    state: "Design",
    image: "/work/dusk.jpg",
    alt: "Stone and timber house at dusk, with mountains behind a wet forecourt",
    focus: "center",
  },
  {
    id: "progress",
    index: "05",
    title: "In Progress",
    kind: "Residence",
    state: "Design",
    image: "/work/progress.jpg",
    alt: "Two-storey house with a car porch, stone screens, and a timber upper floor",
    focus: "center",
  },
  {
    id: "row",
    index: "06",
    title: "The Row",
    kind: "Residences",
    state: "Design",
    image: "/work/row.jpg",
    alt: "A row of houses with stone, timber, and a shared planted front",
    focus: "center",
  },
  {
    id: "site",
    index: "07",
    title: "On Site",
    kind: "Residence",
    state: "Built · Quetta",
    image: "/work/built-facade.jpg",
    alt: "Built house in Quetta with an orange volume, white bands, and a timber gate",
    focus: "center 28%",
  },
  {
    id: "hall",
    index: "08",
    title: "The Hall",
    kind: "Interior",
    state: "Built · Quetta",
    image: "/work/interior.jpg",
    alt: "Built interior with an orange wall, a dark metal screen, and a patterned stone floor",
    focus: "center",
  },
  {
    id: "masjid",
    index: "09",
    title: "Masjid",
    kind: "Religious",
    state: "Design",
    image: "/work/masjid.jpg",
    alt: "Mosque with a tall minaret, blue domes, and a stepped entrance",
    focus: "center",
  },
];

export const services = [
  ["01", "Architecture"],
  ["02", "Interior"],
  ["03", "Planning"],
  ["04", "Construction"],
] as const;

export const phoneDisplay = "0300 2213095";
export const phoneHref = "tel:+923002213095";
export const whatsappHref =
  "https://wa.me/923002213095?text=Hello%20HA%2BArchitects%2C%20I%20would%20like%20to%20discuss%20a%20project.";
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Office%205%202nd%20Floor%20Kazi%20Regal%20Chowk%20Main%20Jinnah%20Road%20Quetta";
