import { ExperimentItem, VisualSketchItem } from "./types";

export const EXPERIMENTS: ExperimentItem[] = [
  {
    title: "Relaysis.com",
    desc: "A design-to-code bridge featuring Token Forge — generating semantic tokens, synchronizing variables between Figma and code, and exporting type-safe JSON.",
    img: "https://via.placeholder.com/600x340/181D27/FFFFFF?text=Relaysis.com",
    linkText: "Visit Relaysis.com",
    linkHref: "https://relaysis.com",
  },
  /*
  // Preserved for future use:
  {
    title: "AI-Driven Design Rituals",
    desc: "Exploring how LLMs can assist in generating design documentation and rituals to speed up team alignment.",
    img: "https://via.placeholder.com/300x170/FFA861/FFFFFF?text=AI+Design",
    linkText: "View Experiment",
    linkHref: "#",
  },
  {
    title: "Micro-interaction Library",
    desc: "A set of high-fidelity prototypes built to test fluid transitions in complex B2B dashboards.",
    img: "https://via.placeholder.com/300x170/F7B11D/FFFFFF?text=UX+Library",
    linkText: "View Prototypes",
    linkHref: "#",
  },
  */
];

export const VISUAL_SKETCHES: VisualSketchItem[] = [
  {
    id: "visual-1",
    title: "Abstract Forms & Fluid Dynamics",
    img: "/assets/visual/visual-1.jpg",
    alt: "Abstract 3D forms and digital fluid dynamics",
    tag: "3D Motion",
  },
  {
    id: "visual-2",
    title: "Geometric Space & Spatial UI",
    img: "/assets/visual/visual-2.jpg",
    alt: "Geometric shapes and spatial layout study",
    tag: "Generative",
  },
  {
    id: "visual-3",
    title: "Minimalist Light & Silhouette",
    img: "/assets/visual/visual-3.jpg",
    alt: "Minimalist dark silhouette and light play",
    tag: "Minimalism",
  },
  {
    id: "visual-4",
    title: "Retro Hardware & Cyberpunk Interface",
    img: "/assets/visual/visual-4.jpg",
    alt: "Retro computer hardware and terminal design exploration",
    tag: "Interface",
  },
  {
    id: "visual-5",
    title: "Chromatic Gradients & Color Studies",
    img: "/assets/visual/visual-5.jpg",
    alt: "Vibrant chromatic waves and atmospheric gradients",
    tag: "Color Theory",
  },
];
