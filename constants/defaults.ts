import { PortfolioData } from "@/types/portfolio";

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  portfolioName: process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "John Doe",
  emailAddress: process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL || "johndoe@email.com",
  resumeUrl: process.env.NEXT_PUBLIC_PORTFOLIO_CV_URL || "#",
  linkedInUrl: process.env.NEXT_PUBLIC_PORTFOLIO_LINKEDIN || "#",
  aboutPage: {
    image1: "https://placehold.co/600x400",
    image2: "https://placehold.co/300x400",
    image3: "https://placehold.co/300x400",
    paragraphs: [
      [
        {
          _type: "block",
          children: [
            { _type: "span", text: "Hi, I’m " },
            { _type: "span", marks: ["strong"], text: "Doe" },
            {
              _type: "span",
              text: ", a UI?UX and full-stack software engineer based in Nigeria. I spend my time exploring financial technology, banking platforms, and microservices architecture.",
            },
          ],
        },
      ],
      [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "My approach is rooted in the belief that software engineering is a collaborative evolution. I lean into robust validation, idempotent transactions, and scalable UI/UX design to solve complex problems.",
            },
          ],
        },
      ],
      [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Whether I'm building banking-as-a-service infrastructure or refining API integrations, I'm driven by the performance and security details that make a product reliable.",
            },
          ],
        },
      ],
      [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "When I’m away from the screen, you can reach out directly via email or check out my work across platforms.",
            },
          ],
        },
      ],
    ],
  },
  heroLines: [
    {
      _key: "line-1",
      content: [
        {
          _type: "block",
          children: [{ _type: "span", text: "Lagos based" }],
        },
      ],
    },
    {
      _key: "line-2",
      content: [
        {
          _type: "block",
          children: [
            { _type: "span", marks: ["em"], text: "designer, passionate" },
          ],
        },
      ],
    },
    {
      _key: "line-3",
      content: [
        {
          _type: "block",
          children: [
            { _type: "span", marks: ["em"], text: "about " },
            { _type: "span", marks: ["strong"], text: "Suya, tea" },
          ],
        },
      ],
    },
    {
      _key: "line-4",
      content: [
        {
          _type: "block",
          children: [{ _type: "span", text: "and solving" }],
        },
      ],
    },
    {
      _key: "line-5",
      content: [
        {
          _type: "block",
          children: [
            { _type: "span", marks: ["em"], text: "complex problems." },
          ],
        },
      ],
    },
  ],
  projects: {
    ibb: {
      name: "Source Business Banking",
      slug: "ibb",
      projectType: "web",
      portfolioWork: {
        title: "Business Banking",
        subtitle: "Source Business Banking",
        headerImage: {
          image: { url: "https://placehold.co/1920x1080/webp?text=IBB+Hero" },
          sizeMode: "fullSize",
          subtext: "Source Business Banking Dashboard Overview",
        },
        headerSubtitle:
          "Redesigning the corporate banking experience for enterprise-scale financial management.",
        sections: [
          {
            _key: "default-1",
            title: "Source Business Banking",
            paragraph: [
              {
                _type: "block",
                children: [
                  { _type: "span", text: "The current dashboard was " },
                  { _type: "span", marks: ["strong"], text: "overwhelming" },
                  { _type: "span", text: " for first-time users." },
                ],
              },
            ],
            fullSize: true,
            images: [
              {
                image: {
                  url: "https://placehold.co/1920x1080/webp?text=New+Dashboard",
                },
                fullSize: true,
                subtext: "New Dashboard",
              },
            ],
          },
        ],
      },
    },
    baas: {
      name: "Radix (BaaS)",
      slug: "baas",
      projectType: "web",
      portfolioWork: {
        title: "Radix Backend",
        subtitle: "Backend as a Service Infrastructure",
        headerImage: {
          image: {
            url: "https://placehold.co/1920x1080/webp?text=Radix+BaaS+Hero",
          },
          sizeMode: "fullSize",
          subtext: "Radix BaaS Infrastructure",
        },
        headerSubtitle:
          "Building a scalable, developer-first API infrastructure for fintech startups.",
        sections: [
          {
            _key: "default-2",
            title: "The Mission",
            paragraph: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Radix aims to reduce the time-to-market for new banks from ",
                  },
                  {
                    _type: "span",
                    marks: ["em"],
                    text: "18 months to 3 weeks.",
                  },
                ],
              },
            ],
            fullSize: true,
            quotes: [
              {
                text: "The integration was so seamless, we didn't even need to call support.",
                author: "CTO, Fintech Startup",
              },
            ],
          },
        ],
      },
    },
    mobile_banking: {
      name: "Mobile Banking",
      slug: "mobile-banking",
      projectType: "mobile",
      portfolioWork: {
        title: "Mobile Banking",
        subtitle: "Consumer Wealth Management",
        headerImage: {
          image: {
            url: "https://placehold.co/600x1200/webp?text=Mobile+App+Hero",
          },
          sizeMode: "mobileSize",
          subtext: "Mobile Banking App Onboarding",
        },
        headerSubtitle:
          "A mobile-first approach to retail banking, focusing on micro-investments.",
        sections: [
          {
            _key: "default-3",
            title: "User Research",
            paragraph: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "We interviewed 50+ Gen Z users regarding banking terminology.",
                  },
                ],
              },
            ],
            paragraph2: [
              {
                _type: "block",
                listItem: "bullet",
                children: [{ _type: "span", text: "Users prefer 'Buckets'" }],
              },
              {
                _type: "block",
                listItem: "bullet",
                children: [{ _type: "span", text: "Dark mode is essential" }],
              },
            ],
            fullSize: true,
            images: [
              {
                image: {
                  url: "https://placehold.co/600x1200/webp?text=Wireframe+1",
                },
                fullSize: false,
                subtext: "Onboarding",
              },
              {
                image: {
                  url: "https://placehold.co/600x1200/webp?text=Wireframe+2",
                },
                fullSize: false,
                subtext: "Savings",
              },
            ],
          },
        ],
      },
    },
    freelance: {
      name: "Freelance Projects",
      slug: "freelance",
      projectType: "graphic",
      portfolioWork: {
        title: "Select Freelance Works",
        subtitle: "Branding & Web Design",
        headerImage: {
          image: {
            url: "https://placehold.co/1920x1080/webp?text=Freelance+Showcase+Hero",
          },
          sizeMode: "fullSize",
          subtext: "Freelance Brand Showcase",
        },
        headerSubtitle:
          "A collection of various identity and digital products.",
        sections: [
          {
            _key: "default-4",
            title: "Brand Identity",
            paragraph: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Developing cohesive visual languages for startups.",
                  },
                ],
              },
            ],
            fullSize: true,
            banner: {
              bannerTitle: "Key Focus Areas",
              bannerTexts: [
                "Brand Strategy",
                "Visual Identity",
                "Digital Design",
              ],
            },
          },
        ],
      },
    },
  },
};
