import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Project, SectionItem } from "@/types/portfolio";
import PageHeader from "@/app/components/utils";
import { cn } from "@/app/libs/utils";
import { ZoomableImage } from "@/app/components/utility";

const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic font-normal text-gray-800">{children}</em>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-accent underline hover:opacity-80 transition-opacity font-medium"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light mb-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600 pl-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

function WorkSections({
  sections,
  projectType,
}: {
  sections: SectionItem[];
  projectType: string;
}) {
  // helper to check if a section is compact/light enough to sit side-by-side...
  const isCompact = (sec: SectionItem) => {
    const isFull = sec.fullSize ?? true;
    if (isFull) return false;
    const imgCount = (sec.images?.length || 0) + (sec.images2?.length || 0);
    const quoteCount = sec.quotes?.length || 0;
    const hasBanner = !!sec.banner?.bannerTexts?.length;
    return !hasBanner && imgCount <= 1 && quoteCount <= 1;
  };

  const renderSectionContent = (
    section: SectionItem,
    idx: number,
    isPaired: boolean,
  ) => {
    const isFullSize = section.fullSize ?? true;

    return (
      <div
        key={section._key || idx}
        className={cn(
          "space-y-12",
          !isPaired && !isFullSize && "max-w-4xl mx-auto",
          isPaired && "space-y-6 [&_p]:text-sm [&_p]:leading-relaxed",
        )}
      >
        {/* Section Title & Paragraph 1 */}
        <div className="space-y-4">
          {section.title && (
            <h3
              className={cn(
                "uppercase tracking-[0.2em] font-bold text-accent text-xs md:text-sm",
                isPaired && "text-[11px] md:text-xs",
              )}
            >
              {section.title}
            </h3>
          )}
          {section.paragraph && (
            <PortableText
              value={section.paragraph}
              components={portableTextComponents}
            />
          )}
        </div>

        {/* Optional Images 1 */}
        {section.images && section.images.length > 0 && (
          <div
            className={cn(
              "w-full grid gap-6",
              section.images.length > 1 &&
                section.images.some((img: any) => !img.fullSize)
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1",
            )}
          >
            {section.images.map((img: any, i: number) => (
              <div key={i}>
                {img.image?.url && (
                  <ZoomableImage
                    src={img.image.url}
                    alt={img.subtext || "Project Image"}
                    subtext={img.subtext}
                    className={
                      projectType === "mobile"
                        ? "aspect-[9/16] max-w-sm mx-auto"
                        : "aspect-video"
                    }
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Optional Quotes */}
        {section.quotes && section.quotes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-gray-100 py-8">
            {section.quotes.map((q: any, i: number) => (
              <div key={i} className="border-l-2 border-accent pl-6 space-y-3">
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed">
                  "{q.text}"
                </p>
                {q.author && (
                  <cite className="block not-italic text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    — {q.author}
                  </cite>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Optional Paragraph 2 */}
        {section.paragraph2 && (
          <div className="space-y-4">
            <PortableText
              value={section.paragraph2}
              components={portableTextComponents}
            />
          </div>
        )}

        {/* Optional Images 2 */}
        {section.images2 && section.images2.length > 0 && (
          <div
            className={cn(
              "w-full grid gap-6",
              section.images2.length > 1 &&
                section.images2.some((img: any) => !img.fullSize)
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1",
            )}
          >
            {section.images2.map((img: any, i: number) => (
              <div key={i}>
                {img.image?.url && (
                  <ZoomableImage
                    src={img.image.url}
                    alt={img.subtext || "Project Image"}
                    subtext={img.subtext}
                    className={
                      projectType === "mobile"
                        ? "aspect-[9/16] max-w-sm mx-auto"
                        : "aspect-video"
                    }
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Optional Banner */}
        {section.banner?.bannerTexts &&
          section.banner.bannerTexts.length > 0 && (
            <div className="border-t border-b border-r-0 border-l-0 border-black border-2 py-16 my-8 space-y-4">
              {section.banner.bannerTitle && (
                <h4 className="text-center text-2xl md:text-5xl capitalize">
                  {section.banner.bannerTitle}
                </h4>
              )}
              <div className="flex flex-wrap items-center justify-center gap-3 text-center text-lg md:text-xl font-medium text-gray-700">
                {section?.banner?.bannerTexts?.map(
                  (textItem: string, bIdx: number) => (
                    <div key={bIdx} className="flex items-center gap-4">
                      <span>{textItem}</span>
                      {bIdx <
                        (section?.banner?.bannerTexts?.length ?? 0) - 1 && (
                        <span className="font-bold hidden md:inline">•</span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
      </div>
    );
  };

  // Group consecutive compact sections into side-by-side flex rows
  const renderedElements = [];
  let i = 0;
  while (i < sections.length) {
    const current = sections[i];
    const next = sections[i + 1];

    if (next && isCompact(current) && isCompact(next)) {
      renderedElements.push(
        <div
          key={`pair-${i}`}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="w-full md:w-1/2">
            {renderSectionContent(current, i, true)}
          </div>
          <div className="w-full md:w-1/2">
            {renderSectionContent(next, i + 1, true)}
          </div>
        </div>,
      );
      i += 2;
    } else {
      renderedElements.push(renderSectionContent(current, i, false));
      i += 1;
    }
  }

  return <div className="space-y-32">{renderedElements}</div>;
}

export default function WorkClient({ project }: { project: Project }) {
  const { portfolioWork, projectType } = project;
  const headerImg = portfolioWork?.headerImage;

  return (
    <main className={cn("max-w-5xl mx-auto px-6 py-20")}>
      <PageHeader
        title={portfolioWork.title}
        subtitle={portfolioWork.subtitle}
        className="my-10"
      />

      {headerImg?.image?.url && (
        <div className="mb-16 -mx-6 sm:-mx-16 lg:-mx-28">
          <ZoomableImage
            src={headerImg.image.url}
            alt={headerImg.subtext || "Hero"}
            subtext={headerImg.subtext}
            className={
              headerImg.sizeMode === "mobileSize" || projectType === "mobile"
                ? "aspect-[9/16] max-w-md mx-auto"
                : "aspect-25/11"
            }
          />
        </div>
      )}

      {portfolioWork.headerSubtitle && (
        <div className="max-w-4xl mx-auto text-center mb-20 px-0">
          <h2 className="text-xl md:text-2xl leading-loose font-normal text-gray-900 whitespace-pre-wrap">
            {portfolioWork.headerSubtitle}
          </h2>
        </div>
      )}

      <hr className="border-gray-200 mb-20" />
      <WorkSections
        sections={portfolioWork.sections || []}
        projectType={projectType}
      />
    </main>
  );
}
