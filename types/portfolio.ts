export const sanityQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    portfolioName,
    emailAddress,
    resumeUrl,
    linkedInUrl,
    behanceUrl,
    heroLines[] {
      _key,
      text,
      highlight,
      isItalic
    },
    "aboutPage": {
      "paragraphs": aboutPage.paragraphs,
      "image1": aboutPage.image1.asset->url,
      "image2": aboutPage.image2.asset->url,
      "image3": aboutPage.image3.asset->url
    }
  },
  "projects": *[_type == "project"] | order(id asc) {
    name,
    "slug": slug.current,
    portfolioWork {
      title,
      subtitle,
      "headerImg": headerImg.asset->url,
      headerText,
      sections[] {
        ...,
        _type == "imageBlock" => {
          "url": image.asset->url,
          title,
          canViewFullSize
        },
        _type == "quoteBlock" => {
          text,
          author
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
  behanceUrl: string;
  aboutPage: AboutPage;
  heroLines: HeroLine[];
  projects: Record<string, Project>;
}

export interface HeroLine {
  _key: string;
  text: string;
  highlight?: string;
  isItalic?: boolean;
}

interface AboutPage {
  image1: string;
  image2: string;
  image3: string;
  paragraphs: string[];
}

export interface Project {
  name: string;
  slug: string;
  portfolioWork: PortfolioWork;
}

interface PortfolioWork {
  title: string;
  subtitle: string;
  headerImg: string;
  headerText: string;
  sections: SectionItem[];
}

export interface SectionItem {
  _key: string;
  items?: Array<{
    title: string;
    paragraph: string;
    list?: string[];
  }>;
  images?: GalleryItem[];
  quoteBlock?: {
    text: string;
    author: string;
  };
  subText?: Array<{ key: string; value: string }>;
}

interface GalleryItem {
  _key: string;
  title: string;
  url: string;
  canViewFullSize: boolean;
}
