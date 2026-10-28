import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { PortfolioData, Project, sanityQuery } from "@/types/portfolio";
import { DEFAULT_PORTFOLIO_DATA } from "@/constants/defaults";

/**
 * Helper to verify if a Portable Text array or array of blocks
 * contains actual non-whitespace text string content.
 */
function hasPortableTextContent(portableTextData: any): boolean {
  if (!Array.isArray(portableTextData) || portableTextData.length === 0) {
    return false;
  }

  return portableTextData.some((item) => {
    // If it's a HeroLine wrapping block object ({ content: [...] })
    const blocks = Array.isArray(item?.content) ? item.content : [item];

    return blocks.some((block: any) => {
      if (!Array.isArray(block?.children)) return false;
      return block.children.some(
        (child: any) =>
          typeof child?.text === "string" && child.text.trim().length > 0,
      );
    });
  });
}

export const usePortfolioData = cache(async (): Promise<PortfolioData> => {
  try {
    const rawData = await client.fetch(
      sanityQuery,
      {},
      {
        next: { revalidate: 15 }, // revalidates the cache every 15 seconds
      },
    );

    if (!rawData || !rawData.settings) {
      return DEFAULT_PORTFOLIO_DATA;
    }

    const formattedData: PortfolioData = {
      portfolioName:
        rawData?.settings?.portfolioName ||
        DEFAULT_PORTFOLIO_DATA.portfolioName,
      emailAddress:
        rawData?.settings?.emailAddress || DEFAULT_PORTFOLIO_DATA.emailAddress,
      resumeUrl:
        rawData?.settings?.resumeUrl || DEFAULT_PORTFOLIO_DATA.resumeUrl,
      linkedInUrl:
        rawData?.settings?.linkedInUrl || DEFAULT_PORTFOLIO_DATA.linkedInUrl,
      heroLines: hasPortableTextContent(rawData?.settings?.heroLines)
        ? rawData.settings.heroLines
        : DEFAULT_PORTFOLIO_DATA.heroLines,

      aboutPage: {
        image1:
          rawData?.settings?.aboutPage?.image1 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image1 ||
          null,
        image2:
          rawData?.settings?.aboutPage?.image2 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image2 ||
          null,
        image3:
          rawData?.settings?.aboutPage?.image3 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image3 ||
          null,
        paragraphs: hasPortableTextContent(
          rawData?.settings?.aboutPage?.paragraphs,
        )
          ? rawData.settings.aboutPage.paragraphs
          : DEFAULT_PORTFOLIO_DATA.aboutPage.paragraphs,
      },

      projects:
        Array.isArray(rawData?.projects) && rawData.projects.length > 0
          ? rawData.projects.reduce(
              (acc: Record<string, Project>, project: any) => {
                if (project?.slug) {
                  acc[project.slug] = project;
                }
                return acc;
              },
              {},
            )
          : DEFAULT_PORTFOLIO_DATA.projects,
    };

    return formattedData;
  } catch (error) {
    console.error("Fetch from sanity failed, using defaults:", error);
    return DEFAULT_PORTFOLIO_DATA;
  }
});
