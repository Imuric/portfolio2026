import { ProcessStep, ToolkitCategory } from "./types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: "target",
    title: "Frame",
    description: "Align user needs, business goals, and constraints.",
  },
  {
    icon: "scale",
    title: "Evaluate",
    description: "Assess ideas through user feedback, data, and design judgment.",
  },
  {
    icon: "sparkles",
    title: "Generate",
    description: "Rapidly explore multiple directions using AI and design intuition.",
  },
  {
    icon: "penTool",
    title: "Refine",
    description: "Improve and iterate on solutions to enhance usability and clarity.",
  },
  {
    icon: "rocket",
    title: "Ship & Learn",
    description: "Deliver fast, measure impact, and iterate in the next cycle.",
  },
];

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  {
    category: "Research and Ideation",
    tools: ["ChatGPT", "Gemini", "Claude"],
  },
  {
    category: "Prototyping & Design",
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
    tools: ["MS Teams", "Jira", "Slack", "Notion", "Miro"],
  },
  {
    category: "Development & Design Systems",
    tools: [
      "Mantine UI",
      "shadcn/ui",
      "Magic UI",
    ],
  },
  {
    category: "Images / Illustrations / Icons",
    tools: ["Nano Banana", "Midjourney", "Freepik, Lucide Icons"],
  },

];
