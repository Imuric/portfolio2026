import { ProcessStep, ToolkitCategory } from "./types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    icon: "target",
    title: "Frame",
    description: "Align user needs, business goals, and technical constraints.",
    deliverables: ["Problem Definition", "User Needs", "North Star"],
  },
  {
    stepNumber: "02",
    icon: "scale",
    title: "Evaluate",
    description: "Assess ideas through user feedback, funnel data, and design judgment.",
    deliverables: ["User Testing", "Data Analysis", "Heuristic Audit"],
  },
  {
    stepNumber: "03",
    icon: "sparkles",
    title: "Generate",
    description: "Rapidly explore multiple directions using AI acceleration and design intuition.",
    deliverables: ["Rapid Wireframes", "AI Exploration", "Concept Iterations"],
  },
  {
    stepNumber: "04",
    icon: "penTool",
    title: "Refine",
    description: "Improve and polish solutions to enhance usability, clarity, and tokenized design systems.",
    deliverables: ["Hi-Fi Prototypes", "Design System Tokens", "Interactive Specs"],
  },
  {
    stepNumber: "05",
    icon: "rocket",
    title: "Ship & Learn",
    description: "Deliver fast with engineering parity, measure impact, and iterate in the next cycle.",
    deliverables: ["Dev Handoff", "Telemetry & Analytics", "Continuous Iteration"],
  },
];

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  {
    category: "Research and Ideation",
    icon: "brain",
    tools: ["ChatGPT", "Gemini", "Claude"],
  },
  {
    category: "Prototyping & Design",
    icon: "layout",
    tools: [
      "Figma",
      "Google Stitch",
      "Framer",
      "Webflow",
      "Spline (3D)",
      "Adobe Creative Suite",
    ],
  },
  {
    category: "Collaboration & Project Management",
    icon: "users",
    tools: ["MS Teams", "Jira", "Slack", "Notion", "Miro"],
  },
  {
    category: "Development & Design Systems",
    icon: "code",
    tools: [
      "Mantine UI",
      "shadcn/ui",
      "Magic UI",
    ],
  },
  {
    category: "Images / Illustrations / Icons",
    icon: "image",
    tools: ["Nano Banana", "Midjourney", "Freepik", "Lucide Icons"],
  },
];

