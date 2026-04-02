import { PortfolioData } from "@/types/portfolio";

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  portfolioName: process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "John Doe",
  emailAddress: process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL || "johndoe@email.com",
  resumeUrl: process.env.NEXT_PUBLIC_PORTFOLIO_CV_URL || "#",
  linkedInUrl: process.env.NEXT_PUBLIC_PORTFOLIO_LINKEDIN || "#",
  behanceUrl: process.env.NEXT_PUBLIC_PORTFOLIO_BEHANCE || "#",
  aboutPage: {
    image1: "https://placehold.co/600x400",
    image2: "https://placehold.co/300x400",
    image3: "https://placehold.co/300x400",
    paragraphs: [
      `Hi, I’m ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "John Doe"} - a designer based in Lagos. I spend my time exploring the space where human behavior meets digital interaction, crafting experiences that feel as intentional as they are intuitive.`,
      "My approach is rooted in the belief that design is a collaborative evolution. I lean into the insights of those around me to solve complex problems, aiming to create work that resonates on a functional and emotional level.",
      "Whether I'm refining a core interface or exploring new visual directions, I'm driven by the quiet details that make a product feel right.",
      "When I’m away from the screen, I’m usually looking for inspiration in the city’s food, coffee, and foreign culture.",
    ],
  },
  heroLines: [
    {
      _key: "line-1",
      text: "Lagos based",
      highlight: "",
      isItalic: false,
    },
    {
      _key: "line-2",
      text: "designer, passionate",
      highlight: "",
      isItalic: true,
    },
    {
      _key: "line-3",
      text: "about ",
      highlight: "Suya, tea",
      isItalic: true,
    },
    {
      _key: "line-4",
      text: "and solving",
      highlight: "",
      isItalic: false,
    },
    {
      _key: "line-5",
      text: "complex problems.",
      highlight: "",
      isItalic: true,
    },
  ],
  projects: {
    ibb: {
      name: "Source Business Banking",
      slug: "ibb",
      portfolioWork: {
        title: "Business Banking",
        subtitle: "Source Business Banking",
        headerImg: "https://placehold.co/1920x1080/webp?text=IBB+Hero",
        headerText:
          "Redesigning the corporate banking experience for enterprise-scale financial management.",
        sections: [
          {
            _key: "default-1",
            items: [
              {
                title: "Source Business Banking",
                paragraph:
                  "The current dashboard was overwhelming for first-time users.",
                list: [
                  "12-click navigation",
                  "High bounce rate",
                  "Legacy color palette",
                ],
              },
            ],
            subText: [
              { key: "Role", value: "Product Designer" },
              { key: "Tools", value: "Figma, React" },
            ],
            images: [
              {
                _key: "img-1",
                url: "https://placehold.co/1920x1080/webp?text=New+Dashboard",
                title: "New Dashboard",
                canViewFullSize: true,
              },
            ],
          },
        ],
      },
    },
    baas: {
      name: "Radix (BaaS)",
      slug: "baas",
      portfolioWork: {
        title: "Radix Backend",
        subtitle: "Backend as a Service Infrastructure",
        headerImg: "https://placehold.co/1920x1080/webp?text=Radix+BaaS+Hero",
        headerText:
          "Building a scalable, developer-first API infrastructure for fintech startups.",
        sections: [
          {
            _key: "default-2",
            items: [
              {
                title: "The Mission",
                paragraph:
                  "Radix aims to reduce the time-to-market for new banks from 18 months to 3 weeks.",
              },
            ],
            subText: [{ key: "MyRole", value: "Lead Product Designer" }],
            quoteBlock: {
              text: "The integration was so seamless, we didn't even need to call support.",
              author: "CTO, Fintech Startup",
            },
          },
        ],
      },
    },
    mobile_banking: {
      name: "Mobile Banking",
      slug: "mobile-banking",
      portfolioWork: {
        title: "Mobile Banking",
        subtitle: "Consumer Wealth Management",
        headerImg: "https://placehold.co/1920x1080/webp?text=Mobile+App+Hero",
        headerText:
          "A mobile-first approach to retail banking, focusing on micro-investments.",
        sections: [
          {
            _key: "default-3",
            items: [
              {
                title: "User Research",
                paragraph:
                  "We interviewed 50+ Gen Z users regarding banking terminology.",
                list: ["Users prefer 'Buckets'", "Dark mode is essential"],
              },
            ],
            images: [
              {
                _key: "m1",
                url: "https://placehold.co/600x1200/webp?text=Wireframe+1",
                title: "Onboarding",
                canViewFullSize: true,
              },
              {
                _key: "m2",
                url: "https://placehold.co/600x1200/webp?text=Wireframe+2",
                title: "Savings",
                canViewFullSize: true,
              },
            ],
          },
        ],
      },
    },
    freelance: {
      name: "Freelance Projects",
      slug: "freelance",
      portfolioWork: {
        title: "Select Freelance Works",
        subtitle: "Branding & Web Design",
        headerImg:
          "https://placehold.co/1920x1080/webp?text=Freelance+Showcase+Hero",
        headerText: "A collection of various identity and digital products.",
        sections: [
          {
            _key: "default-4",
            items: [
              {
                title: "Brand Identity",
                paragraph: "Developing cohesive visual languages for startups.",
              },
            ],
            subText: [
              { key: "Services", value: "Brand Strategy, Logo Design" },
            ],
          },
        ],
      },
    },
  },
};
