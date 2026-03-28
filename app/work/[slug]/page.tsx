import Image from "next/image";

// components...
import PageHeader from "@/app/components/utils";

// utils...
import { cn, projects, SectionItem } from "@/app/libs/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.name,
    description: project.portfolio?.headerText || "Portfolio Project",
  };
}

function WorkSections({ sections }: { sections: SectionItem[] }) {
  return (
    <div className="space-y-40">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-20">
          {section.items && (
            <div
              className={cn(
                "grid gap-12 w-full items-start",
                Array.isArray(section.items) && section.items.length > 1
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 max-w-4xl",
              )}
            >
              {section.items.map((item, i) => (
                <div key={i} className="space-y-6">
                  <h3 className="uppercase tracking-[0.2em] font-bold text-accent text-xs md:text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
                    {item.paragraph}
                  </p>

                  {item.list && item.list.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {item.list.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-sm md:text-base text-gray-500"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dark/40" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {(section.quote || section.subText) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-gray-100 pt-12">
              <div className="md:col-span-7">
                {section.subText && (
                  <div className="grid grid-cols-2 gap-y-6 gap-x-10">
                    {Object.entries(section.subText).map(([key, val]) => (
                      <div key={key}>
                        <span className="font-bold text-gray-900 uppercase tracking-widest text-[10px] block mb-2">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="text-gray-500 text-sm">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-5">
                {section.quote && (
                  <div className="space-y-8">
                    {(Array.isArray(section.quote)
                      ? section.quote
                      : [section.quote]
                    ).map((q, i) => (
                      <div key={i} className="border-l-2 border-accent pl-6">
                        <p className="text-gray-700 italic text-base leading-relaxed">
                          "{q.text}"
                        </p>
                        <cite className="block mt-3 not-italic text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                          — {q.author}
                        </cite>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {section.image && (
            <div className="w-full pt-10">
              <div
                className={cn(
                  "flex flex-col md:flex-row gap-6 w-full",
                  "[&>*]:flex-1",
                )}
              >
                {(Array.isArray(section.image)
                  ? section.image
                  : [section.image]
                ).map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-video bg-gray-50 overflow-hidden rounded-sm"
                  >
                    <Image
                      src={img.url}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {img.canViewFullSize && (
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <span className="text-[10px] text-white bg-black/40 backdrop-blur-md px-4 py-2 uppercase tracking-[0.3em]">
                          Fullsize
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) return <div>Project not found</div>;

  const { portfolio } = project;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <PageHeader
        title={portfolio.title}
        subtitle={portfolio.subtitle}
        className="my-10"
      />

      {portfolio.headerImg && (
        <div
          className={cn("relative aspect-25/11 w-full mb-16 overflow-hidden")}
        >
          <Image
            src={portfolio.headerImg}
            alt="Hero"
            fill
            className={cn("object-cover")}
          />
        </div>
      )}

      <div className={cn("max-w-3xl mx-auto text-center mb-20")}>
        <h2 className={cn("text-xl leading-relaxed font-light text-gray-700")}>
          {portfolio.headerText}
        </h2>
      </div>

      <hr className={cn("border-gray-200 mb-20")} />

      <hr className="my-20 border-gray-100" />

      <WorkSections sections={portfolio?.sections || []} />
    </main>
  );
}
