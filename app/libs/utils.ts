import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Quote = { text: string; author: string };

export type Image = { url: string; title: string; canViewFullSize?: boolean };

export type SectionItem = {
  items?: Array<{ title: string; paragraph: string; list?: string[] }>;

  subText?: Record<string, string>;
  quote?: Quote | Quote[];
  image?: Image | Image[];
  [key: string]: any;
};

export type PortfolioWork = {
  title: string;
  subtitle: string;
  headerImg?: string;
  headerText: string;
  sections?: SectionItem[];
};

export const projects: Record<
  string,
  { id: number; name: string; portfolio: PortfolioWork }
> = {
  ibb: {
    id: 1,
    name: "Business Banking",
    portfolio: {
      title: "Business Banking",
      subtitle: "Source Business Banking",
      headerImg: "https://placehold.co/1920x1080/webp?text=IBB+Hero",
      headerText:
        "Redesigning the corporate banking experience for enterprise-scale financial management.",
      sections: [
        {
          items: [
            {
              title: "The Problem",
              paragraph:
                "The current dashboard was overwhelming for first-time users.",
              list: [
                "12-click navigation",
                "High bounce rate",
                "Legacy color palette",
              ],
            },
            {
              title: "The Objective",
              paragraph: "Streamline the payment process to under 30 seconds.",
              list: [
                "One-tap approvals",
                "Biometric integration",
                "Real-time logging",
              ],
            },
          ],
          subText: { role: "Product Designer", tools: "Figma, React" },
          image: {
            url: "https://placehold.co/1920x1080/webp?text=New+Dashboard",
            title: "New Dashboard",
          },
        },
      ],
    },
  },
  baas: {
    id: 2,
    name: "Radix (BaaS)",
    portfolio: {
      title: "Radix Backend",
      subtitle: "Backend as a Service Infrastructure",
      headerImg: "https://placehold.co/1920x1080/webp?text=Radix+BaaS+Hero",
      headerText:
        "Building a scalable, developer-first API infrastructure for fintech startups.",
      sections: [
        {
          items: [
            {
              title: "THE MISSION",
              paragraph:
                "Radix aims to reduce the time-to-market for new banks from 18 months to 3 weeks by providing pre-certified financial modules.",
            },
          ],
          subText: {
            myRole: "Lead Product Designer",
            focus: "Developer Experience (DX)",
          },
        },
        {
          items: [
            {
              title: "API DOCUMENTATION",
              paragraph:
                "We realized that the product wasn't just the code, but the documentation. We designed a triple-pane doc system to handle complex endpoints.",
            },
            {
              title: "DEVELOPER WORKFLOW",
              paragraph:
                "By integrating a 'Try it Now' feature directly into the docs, we reduced support tickets by 40%.",
            },
          ],
          image: {
            url: "https://placehold.co/1200x800/webp?text=API+Docs+Interface",
            title: "Radix API Docs",
            canViewFullSize: true,
          },
          quote: {
            text: "The integration was so seamless, we didn't even need to call support.",
            author: "CTO, Fintech Startup",
          },
        },
      ],
    },
  },
  mobile_banking: {
    id: 3,
    name: "Mobile Banking",
    portfolio: {
      title: "Mobile Banking",
      subtitle: "Consumer Wealth Management",
      headerImg: "https://placehold.co/1920x1080/webp?text=Mobile+App+Hero",
      headerText:
        "A mobile-first approach to retail banking, focusing on micro-investments and savings goals.",
      sections: [
        {
          items: [
            {
              title: "USER RESEARCH",
              paragraph:
                "We interviewed 50+ Gen Z users and found that traditional banking terminology was the biggest barrier to entry.",
            },
          ],
          list: [
            "Users prefer 'Buckets' over 'Accounts'",
            "Visual progress bars increase savings rates",
            "Dark mode is essential",
          ],
          image: [
            {
              url: "https://placehold.co/600x1200/webp?text=Mobile+Wireframe+1",
              title: "Onboarding Flow",
            },
            {
              url: "https://placehold.co/600x1200/webp?text=Mobile+Wireframe+2",
              title: "Savings Goals",
            },
          ],
        },
        {
          items: [
            {
              title: "THE SOLUTION",
              paragraph:
                "The final app features a conversational UI that guides users through financial health checks without using jargon.",
            },
            {
              title: "MICRO-INVESTMENTS",
              paragraph:
                "We implemented a 'Round-up' feature that automatically invests spare change from everyday transactions.",
            },
          ],
          quote: {
            text: "It feels more like a lifestyle app than a bank.",
            author: "Beta Tester",
          },
          image: {
            url: "https://placehold.co/1200x800/webp?text=Mobile+App+Mockup",
            title: "Final App Screens",
            canViewFullSize: true,
          },
        },
      ],
    },
  },
  freelance: {
    id: 4,
    name: "Freelance Projects",
    portfolio: {
      title: "Select Freelance Works",
      subtitle: "Branding & Web Design",
      headerImg:
        "https://placehold.co/1920x1080/webp?text=Freelance+Showcase+Hero",
      headerText:
        "A collection of various identity and digital products created for global clients.",
      sections: [
        {
          items: [
            {
              title: "BRAND IDENTITY",
              paragraph:
                "Developing cohesive visual languages for startups in the logistics and healthcare sectors.",
            },
            {
              title: "DESIGN SYSTEMS",
              paragraph:
                "Crafting scalable component libraries in Figma to ensure consistency across web and mobile platforms.",
            },
          ],
          subText: { services: "Brand Strategy, Logo Design, Web Development" },
          image: [
            {
              url: "https://placehold.co/800x800/webp?text=Brand+Identity+1",
              title: "Logistics Brand",
            },
            {
              url: "https://placehold.co/800x800/webp?text=Brand+Identity+2",
              title: "Healthcare Logo",
            },
          ],
        },
      ],
    },
  },
};

const work = [
  {
    title: "Business Banking",
    subtitle: "Source Business Banking",
    headerImg: "https://placehold.co/1920x1080/webp?text=HealtheEDW+Hero+Shot",
    headerText:
      "HealtheEDW (Electronic Data Warehouse) was developed for Data Stewards and Analysts enabling access to a variety of data and ways to manipulate it.",
    problem:
      "Data Stewards are essentially the gate keepers of an organization's data. They need an all-in-one application that can help them achieve these goals.",
    role: "Designer",
    team: "1 Designer | 1 Researcher",
    timeframe: "8 Months",
    gallery: [
      "https://placehold.co/800x800/webp?text=Analytics+Concept+01",
      "https://placehold.co/800x800/webp?text=Screen+Capture+04",
      "https://placehold.co/800x800/webp?text=Whiteboard+Sketch",
      "https://placehold.co/800x800/webp?text=Data+Model+View",
      "https://placehold.co/800x800/webp?text=User+Flow+Diagram",
    ],
  },
];
