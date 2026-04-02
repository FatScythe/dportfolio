import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { PortfolioData, Project, sanityQuery } from "@/types/portfolio";
import { DEFAULT_PORTFOLIO_DATA } from "@/constants/defaults";

export const usePortfolioData = cache(async (): Promise<PortfolioData> => {
  try {
    const rawData = await client.fetch(
      sanityQuery,
      {},
      { next: { revalidate: 60 } },
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
      behanceUrl:
        rawData?.settings?.behanceUrl || DEFAULT_PORTFOLIO_DATA.behanceUrl,
      heroLines:
        rawData?.settings?.heroLines?.length > 0
          ? rawData?.settings?.heroLines
          : DEFAULT_PORTFOLIO_DATA.heroLines,
      aboutPage: {
        image1:
          rawData?.settings?.aboutPage?.image1 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image1,
        image2:
          rawData?.settings?.aboutPage?.image2 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image2,
        image3:
          rawData?.settings?.aboutPage?.image3 ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.image3,
        paragraphs:
          rawData?.settings?.aboutPage?.paragraphs ||
          DEFAULT_PORTFOLIO_DATA.aboutPage.paragraphs,
      },
      projects:
        rawData?.projects?.length > 0
          ? rawData?.projects?.reduce(
              (acc: Record<string, Project>, project: any) => {
                acc[project.slug] = project;
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
