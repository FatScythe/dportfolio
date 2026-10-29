export const sanityQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    portfolioName,
    emailAddress,
    resumeUrl,
    linkedInUrl,
    loginBackgroundImage {
      "url": asset->url,
      alt
    },
    heroLines[] {
      _key,
      content
    },
    "aboutPage": {
      "paragraphs": aboutPage.paragraphs,
      "image1": aboutPage.image1.asset->url,
      "image2": aboutPage.image2.asset->url,
      "image3": aboutPage.image3.asset->url
    }
  },
  "projects": *[_type == "project"] | order(_createdAt asc) {
    name,
    "slug": slug.current,
    projectType,
    portfolioWork {
      title,
      subtitle,
      headerImage {
        "image": {
          "url": image.asset->url
        },
        sizeMode,
        subtext
      },
      headerSubtitle,
      sections[] {
        ...,
        images[] {
          "image": {
            "url": image.asset->url
          },
          fullSize,
          subtext
        },
        images2[] {
          "image": {
            "url": image.asset->url
          },
          fullSize,
          subtext
        }
      }
    }
  }
}`;

export interface PortfolioData {
  portfolioName: string;
  emailAddress: string;
  resumeUrl: string;
  linkedInUrl: string;
  loginBackgroundImage?: {
    url?: string;
    alt?: string;
  };
  // behanceUrl: string;
  aboutPage: AboutPage;
  heroLines: HeroLine[];
  projects: Record<string, Project>;
}

export interface HeroLine {
  _key: string;
  content: any[];
}

export interface AboutPage {
  image1: string | null;
  image2: string | null;
  image3: string | null;
  paragraphs: any[]; // portable text blocks array...
}

export interface Project {
  name: string;
  slug: string;
  projectType: "web" | "mobile" | "graphic";
  portfolioWork: PortfolioWork;
}

export interface PortfolioWork {
  title: string;
  subtitle: string;
  headerImage?: {
    image: {
      url: string;
    };
    sizeMode: "fullSize" | "mobileSize";
    subtext?: string;
  };
  headerSubtitle: string;
  sections: SectionItem[];
}

export interface SectionItem {
  _key: string;
  title?: string;
  paragraph?: any[];
  fullSize?: boolean;
  images?: Array<{
    image: {
      url: string;
    };
    fullSize: boolean;
    subtext?: string;
  }>;
  quotes?: Array<{
    text: string;
    author: string;
  }>;
  paragraph2?: any[];
  images2?: Array<{
    image: {
      url: string;
    };
    fullSize: boolean;
    subtext?: string;
  }>;
  banner?: {
    bannerTitle?: string;
    bannerTexts?: string[];
  };
}
